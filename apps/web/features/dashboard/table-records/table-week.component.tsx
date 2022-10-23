/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';

import { Form, Table } from 'antd';

import { Spinner } from '@/components/spinner'
import { tryUtils } from '@/helpers/utils';
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
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      if (!date.isoWeek) {
        return;
      }

      setLoading(true);
      const response = await api.get('/schedule', {
        params: {
          isoWeek: date.isoWeek,
          isoYear: date.isoYear,
        }
      });

      if (response?.data?.ok) {
        const { payload } = response.data;
        console.log(payload)
        const week = Object.assign([], payload);
        setData(week);
      }

    } catch (err: any) {
      setData([]);
      if (err.response) { 
        tryUtils.handleError(err.response?.data?.message);
        return;
      }
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

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
