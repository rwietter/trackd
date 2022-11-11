import { FC, Key, useEffect, useState } from 'react';

import { Form, Table } from 'antd';

import { Spinner } from '@/components/spinner';
import { Button } from '@/features/ui/button';
import { tryUtils } from '@/helpers/utils';
import { useFetchSechedule } from '@/hooks/use-fetch-schedule';
import { api } from '@/services/api';

import { notify } from '../../../helpers/notify';
import { Columns } from './columns';
import { EditableCell } from './edit-cell.component';
import { ButtonWrapper } from './styles';
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

export const TableDeleteRecord: FC<IProps> = ({ date }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState<Item[]>(originData);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingKey, setEditingKey] = useState('');
  const { data: schedule, fetch } = useFetchSechedule(date);

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

  const handleFormDelete = async () => {
    try {
      setLoading(true);
      const token = tryUtils.getToken();

      const response = await api.post('/admin/delete-schedule', {
        isoWeek: date.isoWeek,
        isoYear: date.isoYear,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (!response?.data?.ok) {
        tryUtils.handleError(response?.data?.message);
        return;
      }

      notify('Horários deletados com sucesso!', 'success');
    } catch (err: any) {
      if (err.response) {
        notify(err.response?.data?.message, 'error');
        return;
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
  }, [date]);

  return (
    <Form form={form}
      component={false}
      onSubmitCapture={() => save(editingKey)}
    >
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={schedule}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
      <ButtonWrapper>
        <Button
          type='submit'
          onClick={handleFormDelete}
          size='md'
        >
          {loading ? <Spinner size='small' center={false} /> : 'Excluir'}
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
