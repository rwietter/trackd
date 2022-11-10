import type { FC } from 'react';

import { DatePicker as DatePickerAntd } from 'antd';

import { MomentInput } from 'moment';

type IMomentInputDate = {
  _d: Date;
}

interface Props {
  onChangeDate: (date: IMomentInputDate) => void;
  disableDate: (curr: MomentInput) => boolean[];
}

const DatePicker: FC<Props> = ({ onChangeDate, disableDate }) => (
  <DatePickerAntd
    onChange={onChangeDate as (date: unknown) => void}
    format="DD/MM/YYYY"
    size="large"
    picker="week"
    placeholder="Escolha semana"
    disabledDate={(curr) => disableDate(curr).map((item) => item === true).includes(true)}
  />
);

export { DatePicker };
