import { FC, Key, useEffect, useState } from 'react';

import { Form } from 'antd';

import { Spinner } from '@/components/spinner';
import { CustomTable } from '@/components/table';
import { Button } from '@/features/ui/button';
import { notify } from '@/helpers/notify';
import { utils } from '@/helpers/utils';
import { useFetchSechedule } from '@/hooks/use-fetch-schedule';
import { api } from '@/services/api';

import { Columns } from './columns';
import { EditableCell } from './edit-cell.component';
import { normalize } from './normalize-records';
import * as S from './styles';
import { Item } from './types';

interface IProps {
  date: {
    isoWeek: string;
    isoYear: string;
  };
}

export const EditSchedule: FC<IProps> = ({ date }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [editingKey, setEditingKey] = useState('');
  const { data, setData, fetch } = useFetchSechedule(date);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetch, [date]);

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: Key }) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data.schedule];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData({ schedule: newData, id: data.id });
        setEditingKey('');
      } else {
        newData.push(row);
        setData({ schedule: newData, id: data.id });
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const mergedColumns = Columns({ isEditing, cancel, save, editingKey, edit }).map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleEditSchedule = async () => {
    try {
      setLoading(true);
      const { week, weekAvailable } = normalize(data.schedule);

      const token = utils.getToken();


      const payload = {
        week,
        weekAvailable,
        isoWeek: date.isoWeek,
        isoYear: date.isoYear,
        id: data.id
      }


      const response = await api.put('/admin/edit-schedule', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (response?.data?.ok) {
        notify('Agenda editada com sucesso', 'success');
      }
    } catch (err: any) {
      if (err.response) {
        notify(err.response?.data?.message, 'error');
        return;
      }
      console.log(err.message)
    } finally {
      setLoading(false);
    }
  }

  const handleResetForm = () => {
    setData({ schedule: [], id: data.id });
  }

  return (
    <Form form={form}
      component={false}
      onSubmitCapture={() => save(editingKey)}
    >
      <CustomTable
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dropdownPrefixCls="ant-dropdown"
        bordered
        dataSource={data.schedule}
        columns={mergedColumns as any}
        rowClassName="editable-row"
        pagination={false}
      />
      <S.ButtonWrapper>
        <Button
          type='submit'
          onClick={handleEditSchedule}
          size='md'
        >
          {loading ? <Spinner size='small' center={false} /> : 'Editar'}
        </Button>
        <Button
          type='reset'
          onClick={handleResetForm}
          size='md'
          color='secondary'
        >
          Resetar
        </Button>

      </S.ButtonWrapper>
    </Form>
  );
};
