/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import moment, { MomentInput } from 'moment';

type IMomentInputDate = {
  _d: Date;
}

const useIsoWeek = () => {
  const [date, setDate] = useState({ isoWeek: '', isoYear: '' });

  useEffect(() => {
    moment.updateLocale('en', {
      weekdaysMin: ['Do', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    });
  }, []);

  const onChangeDate = (value: IMomentInputDate) => {
    if (value?._d) {
      const dateObject = new Date(value?._d);
      const isoWeek = moment(dateObject).isoWeek().toString();
      const isoYear = dateObject.getFullYear().toString();

      setDate({ isoWeek, isoYear });
    }
  };

  const disableDate = (current: MomentInput) => [
    moment(current).day() === 0,
    moment(current).day() === 6,
    current && current < moment().endOf('day'),
  ];

  return { date, onChangeDate, disableDate };
};

export { useIsoWeek };
