import { FC, Key, useState } from 'react';

import { Form } from 'antd';

import { Spinner } from '@/components/spinner';
import { CustomTable } from '@/components/table';
import { Button } from '@/features/ui/button';
import { notify } from '@/helpers/notify';
import { tryUtils } from '@/helpers/utils';
import { api } from '@/services/api';

import { Columns } from './columns';
import { EditableCell } from './edit-cell.component';
import { normalize } from './normalize-records';
import * as S from './styles';
import { Item, IWeek } from './types';

const weekDay: IWeek = {
  0: 'Segunda',
  1: 'Terça',
  2: 'Quarta',
  3: 'Quinta',
  4: 'Sexta',
};

const originData: Item[] = [];
for (let idx = 0; idx < 5; idx++) {
  originData.push({
    key: idx.toString(),
    day: weekDay[idx],
    records: `5`,
    records_available: `0`,
  });
}

interface IProps {
  date: {
    isoWeek: string;
    isoYear: string;
  };
}

export const TableRegisterRecord: FC<IProps> = ({ date }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: Key }) => {
    form.setFieldsValue({ ...record});
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
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

  const handleSubmitForm = async () => {
    try {
      setLoading(true);
      const { week, weekAvailable } = normalize(data);

      const token = tryUtils.getToken();

      const payload = {
        week,
        weekAvailable,
        isoWeek: date.isoWeek,
        isoYear: date.isoYear,
      }

      const response = await api.post('/admin/create-schedule', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (response?.data?.ok) {
        notify('Agenda criada com sucesso', 'success');
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
    setData(originData);
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
        dataSource={data}
        columns={mergedColumns as any}
        rowClassName="editable-row"
        pagination={false}
      />
      <S.ButtonWrapper>
        <Button
          type='submit'
          onClick={handleSubmitForm}
          size='md'
        >
          {loading ? <Spinner size='small' center={false} /> : 'Salvar'}
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
