import { FC, useState, useEffect } from 'react';

import {
  Form, Table,
} from 'antd';

import {
  IRecord, IRecordA, Item,
} from '../types';
import { EditableCell } from './edit-cell.component';

export const TableWeek: FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
  }, []);

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
