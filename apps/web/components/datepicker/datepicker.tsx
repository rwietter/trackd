/* eslint-disable react/require-default-props */
import { FC } from 'react';

import { DatePicker as DatePickerAntd } from 'antd';

import { IMomentInputDate } from '@types';

import { MomentInput } from 'moment'

interface IProps {
  onChangeDate: (date: IMomentInputDate) => void;
  disableDate?: (curr: MomentInput) => boolean[];
}

const handleDisable = (curr: moment.Moment, { disableDate }: Pick<IProps, 'disableDate'>) => {
  if (disableDate) {
    return disableDate(curr).filter((item) => item).includes(true);
  }
  return false;
}

const DatePicker: FC<IProps> = ({ onChangeDate, disableDate }) => {
  return (
    <DatePickerAntd
      onChange={onChangeDate as (date: unknown) => void}
      format="DD/MM/YYYY"
      size='large'
      picker="week"
      placeholder='Escolha semana'
      disabledDate={(e) => handleDisable(e, { disableDate })}
    />
  )
}

export { DatePicker };