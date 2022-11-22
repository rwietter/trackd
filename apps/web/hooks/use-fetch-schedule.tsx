import { useState } from 'react';

import { utils } from '@/helpers/utils';
import { api } from '@/services/api';

type Props = {
  isoWeek: string;
  isoYear: string;
}

export interface Schedule {
  schedule: {
    key: string;
    day: string;
    records: string;
    records_available: string;
  }[],
  id: string
}

const useFetchSechedule = (date: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Schedule>({} as Schedule);

  const fetch = () => {
    try {
      if (!date.isoWeek) {
        return;
      }

      setLoading(true);
      api.get('/schedule', {
        params: {
          isoWeek: date.isoWeek,
          isoYear: date.isoYear,
        }
      }).then((response) => {
        if (response?.data?.ok) {
          const { payload, id } = response.data;
          const week = Object.assign([], payload);
          setData({ schedule: week, id });
        }
      }).catch((error) => {
        setData({ schedule: [], id: '' });
        utils.handleError(error.response?.data?.message);
      });
    } catch (err: any) {
      setData({ schedule: [], id: '' });
      if (err.response) {
        utils.handleError(err.response?.data?.message);
        return;
      }
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }
  return { fetch, data, setData, loading };
}

export { useFetchSechedule };