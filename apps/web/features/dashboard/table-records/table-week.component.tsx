/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';

import { Form } from 'antd';

import { Spinner } from '@/components/spinner'
import { CustomTable } from '@/components/table';
import { Button } from '@/features/ui/button';
import { notify } from '@/helpers/notify';
import { tryUtils } from '@/helpers/utils';
import { useFetchSechedule } from '@/hooks/use-fetch-schedule';
import { api } from '@/services/api';

import { ButtonWrapper } from '../styles';
import { Item, IRecord, IRecordA } from '../types';

interface IProps {
  date: {
    isoWeek: string;
    isoYear: string;
  };
}

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

export const TableWeek: FC<IProps> = ({ date }) => {
  const [form] = Form.useForm();
  const { data, setData, fetch, loading } = useFetchSechedule(date);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, [date]);

  const handleFormDelete = async () => {
    try {
      setDeleteLoading(true);
      const token = tryUtils.getToken();

      const response = await api.delete('/admin/delete-schedule', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: data.id,
        },
      })

      if (!response?.data?.ok) {
        notify(response?.data?.message, 'error');
        return;
      }

      setData({ schedule: [], id: '' });
      notify('Horários deletados com sucesso!', 'success');
    } catch (err: any) {
      if (err.response) {
        notify(err.response?.data?.message, 'error');
        return;
      }
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <Form
      form={form}
      component={false}
    >
      <CustomTable
        bordered
        dataSource={data.schedule}
        columns={mergedColumns as any}
        rowClassName="editable-row"
        pagination={false}
      />

      <ButtonWrapper>
        <Button
          type='submit'
          onClick={handleFormDelete}
          size='md'
          color='secondary'
        >
          {loading ? <Spinner size='small' center={false} /> : 'Excluir'}
        </Button>
      </ButtonWrapper>

      {deleteLoading || loading && (
        <Spinner
          size='large'
          center
          style={{ paddingLeft: '6rem' }}
        />
      )}
    </Form>
  );
};
