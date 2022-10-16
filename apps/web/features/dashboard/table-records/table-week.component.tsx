/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable import-helpers/order-imports */
import { FC, useState, useEffect } from 'react';

import {
  Form, Table,
} from 'antd';
import { api } from '@/services/api';

import {
  IRecord, IRecordA,
} from '../types';
import { EditableCell } from './edit-cell.component';

import { notify } from '@/helpers/notify';
import { Item } from '../../register-record/types';
import { ResponseError } from '../../../@types/axios';

export const TableWeek: FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get('/schedule');


      if (response.status === 200) {
        const { payload } = response.data;

        const week = Object.assign([], payload);
        setData(week);
      }

    } catch (error) {
      const err = error as ResponseError;
      notify(err.response?.data?.message, 'error');
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    {
      title: 'Dia',
      dataIndex: 'day',
      width: '20%',
      editable: false,
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
      title: 'Fichas',
      dataIndex: 'records',
      width: '20%',
      editable: true,
      ellipsis: true,
      sorter: (a: IRecord, b: IRecord) => +a.records - +b.records,
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
