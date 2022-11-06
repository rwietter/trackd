/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import moment, { MomentInput } from 'moment';

export interface IMomentInputDate {
  _d: string;
}

const useIsoWeek = () => {
  const [date, setDate] = useState({ isoWeek: '', isoYear: '' });

  useEffect(() => {
    moment.updateLocale('en', {
      weekdaysMin: ['Do', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    });
  }, []);

  useEffect(() => {
    const dateObject = new Date();
    const isoWeek = `${moment(dateObject).isoWeek() + 1}`;
    const isoYear = dateObject.getFullYear().toString();
    console.log(isoWeek, isoYear);

    setDate({ isoWeek, isoYear });
  }, []);

  const disableDate = (current: MomentInput) => {
    return [
      moment(current).day() === 0,
      moment(current).day() === 6,
      current && current < moment().endOf('day'),
    ];
  };

  return { date, disableDate };
};

export { useIsoWeek };
