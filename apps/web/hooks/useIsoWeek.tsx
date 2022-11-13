/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';

import { IMomentInputDate } from '@types';

import moment, { MomentInput } from 'moment';

type Props = {
  flag: 'delete' | 'create';
}

const useIsoWeek = (props: Props = { flag: 'create' }) => {
  const [date, setDate] = useState({ isoWeek: '', isoYear: '' });

  useEffect(() => {
    moment.updateLocale('en', {
      weekdaysMin: ["Do", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    });
  }, [])

  const onChangeDate = (value: IMomentInputDate) => {
    if (value?._d) {
      const dateObject = new Date(value?._d)
      const isoWeek = moment(dateObject).isoWeek().toString();
      const isoYear = dateObject.getFullYear().toString();

      setDate({ isoWeek, isoYear });
    }
  }

  const disableDate = (current: MomentInput) => {
    return [
      moment(current).day() === 0,
      moment(current).day() === 6,
      props.flag === 'create' && moment(current).isBefore(moment(), 'day'),
    ]
  }

  return [date, onChangeDate, disableDate] as const;
}

export { useIsoWeek };