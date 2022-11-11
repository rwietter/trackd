/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';

import { Form, Table } from 'antd';

import { Spinner } from '@/components/spinner'
import { tryUtils } from '@/helpers/utils';
import { useFetchSechedule } from '@/hooks/use-fetch-schedule';
import { api } from '@/services/api';

import { Item, IRecord, IRecordA } from '../types';

interface IProps {
  date: {
    isoWeek: string;
    isoYear: string;
  };
}

export const TableWeek: FC<IProps> = ({ date }) => {
  const [form] = Form.useForm();
  const { data, fetch, loading } = useFetchSechedule(date);

  useEffect(() => {
    fetch();
  }, [date]);

  const columns = [
    {
      title: 'Dia',
      dataIndex: 'day',
      width: '20%',
      editable: false,
    },
    {
      title: 'Total de Fichas',
      dataIndex: 'records',
      width: '25%',
      editable: true,
      ellipsis: true,
      sorter: (a: IRecord, b: IRecord) => +a.records - +b.records,
    },
    {
      title: 'Disponíveis',
      dataIndex: 'records_available',
      width: '25%',
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
    <Form
      form={form}
      component={false}
    >
      <Table
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
      {loading && (
        <Spinner
          size='large'
          center
          style={{ paddingLeft: '6rem' }}
        />
      )}
    </Form>
  );
};
