import { useState } from 'react';

import { tryUtils } from '@/helpers/utils';
import { api } from '@/services/api';

type Props = {
  isoWeek: string;
  isoYear: string;
}

const useFetchSechedule = (date: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
          const { payload } = response.data;
          const week = Object.assign([], payload);
          setData(week);
        }
      }).catch((error) => {
        setData([]);
        tryUtils.handleError(error.response?.data?.message);
      });
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
  return { fetch, data, loading };
}

export { useFetchSechedule };