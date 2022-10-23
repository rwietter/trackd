import { FC } from 'react';

import { DatePicker as DatePickerAntd } from 'antd';

import { IMomentInputDate } from '@types';

import { MomentInput } from 'moment'

interface IProps {
  onChangeDate: (date: IMomentInputDate) => void;
  disableDate: (curr: MomentInput) => boolean[];
}

const DatePicker: FC<IProps> = ({ onChangeDate, disableDate }) => (
  <DatePickerAntd
    onChange={onChangeDate as (date: unknown) => void}
    format="DD/MM/YYYY"
    size='large'
    picker="week"
    placeholder='Escolha semana'
    disabledDate={(curr) => disableDate(curr).map((item) => item === true).includes(true)}
  />
)

export { DatePicker };