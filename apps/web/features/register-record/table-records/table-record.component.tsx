import { FC, Key, useState } from 'react';

import {
  Form, Popconfirm, Table, Typography,
} from 'antd';

import {
  IRecord, IRecordA, Item, IWeek,
} from '../types';
import { EditableCell } from './edit-cell.component';

const week: IWeek = {
  0: 'Segunda',
  1: 'Terça',
  2: 'Quarta',
  3: 'Quinta',
  4: 'Sexta',
};

const originData: Item[] = [];
for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    day: week[i],
    records: `${i}`,
    records_available: `${i + 1}`,
  });
}

export const TableRegisterRecord: FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: Key }) => {
    form.setFieldsValue({
      day: '', month: '', year: '', ...record,
    });
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

  const columns = [
    {
      title: 'Dia',
      dataIndex: 'day',
      width: '20%',
      editable: false,
    },
    {
      title: 'Fichas',
      dataIndex: 'records',
      width: '20%',
      editable: true,
      ellipsis: true,
      sorter: (a: IRecord, b: IRecord) => +a.records - +b.records,
    },
    {
      title: 'Fischas disponíveis',
      dataIndex: 'records_available',
      width: '30%',
      editable: true,
      ellipsis: true,
      sorter: (a: IRecordA, b: IRecordA) => +a.records_available - +b.records_available,
    },
    {
      title: 'Operação',
      dataIndex: 'operation',
      width: '20%',
      render: (_: string, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm title="Quer realmente cancelar ?"
              onConfirm={cancel}
            >
              <a href='#null'>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Editar
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
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

  return (
    <Form form={form}
      component={false}
    >
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};
