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
  const [schedule, setSchedule] = useState<Properties[]>([]);

  const handleFetch = async (value: Input = { _d: null }) => {
    try {
      const { default: moment } = await import('moment')
      const dateObject = value._d ? new Date(value._d) : new Date();
      const isoWeek = moment(dateObject).isoWeek().toString();
      const isoYear = dateObject.getFullYear().toString();

      const response = await api.get('/schedule', {
        params: {
          isoWeek,
          isoYear,
        },
      });

      const { payload } = response.data;
      const week = Object.assign([], payload);

      const newWeek = week.map((item: Schedule) => {
        const dayName = enUs[item.day as keyof typeof enUs];
        const date = moment(value._d || dateObject).isoWeekday(dayName).format('DD-MM-YYYY');

        const currentDate = moment().format('DD-MM-YYYY');
        const isWeekBeforeCurrentDate = moment(date).isSameOrAfter(currentDate);

        return {
          key: item.day,
          isOld: value._d ? true : isWeekBeforeCurrentDate,
          border: !value._d,
          day: date,
          records: item.records,
          records_available: item.records_available,
        };
      });

      setSchedule(newWeek);
    } catch (error) {
      setSchedule([]);
    }
  };

  return { schedule, handleFetch };
};

export { useFetch };
