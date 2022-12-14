/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
import { useState } from 'react';

import { Properties, Schedule } from '../@types';
import { enUs } from '../components/card-schedule/mapping';
import { api } from '../services/api';

type Input = {
  _d: Date | any;
}

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<Properties[]>([]);

  const handleFetch = async (value: Input = { _d: null }) => {
    setLoading(true)
    try {
      const { default: moment } = await import('moment')
      const now = value._d ? new Date(value._d) : new Date();
      const isoWeek = moment(now).isoWeek().toString();
      const isoYear = now.getFullYear().toString();

      const response = await api.get('/schedule', {
        params: {
          isoWeek,
          isoYear,
        },
      });

      const { payload } = response.data;
      const week = Object.assign([], payload);

      const nowDate = moment().format('YYYY-MM-DD');

      const mappedSchedule = week.map((item: Schedule) => {
        const dayOfWeek = enUs[item.day as keyof typeof enUs];
        const weekDay = moment(value._d || now).isoWeekday(dayOfWeek).format('YYYY-MM-DD');

        const isNowDateAfterDate = moment(nowDate).isAfter(weekDay);

        return {
          key: item.day,
          isOld: value._d ? false : isNowDateAfterDate,
          border: value._d ? false : !isNowDateAfterDate,
          day: moment(weekDay).format('DD-MM-YYYY'),
          records: item.records,
          records_available: item.records_available,
        };
      });

      setSchedule(mappedSchedule);

    } catch (error) {
      setSchedule([]);
    } finally {
      setLoading(false);
    }
  };

  return { schedule, handleFetch, loading };
};

export { useFetch };
