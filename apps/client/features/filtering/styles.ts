import { DatePicker } from 'antd';

import { st } from 'ui';

export const ScheduleContainer = st('div', {
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',

  '@media (min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: '70rem',
    margin: '0 auto',
    gap: '1rem',
  },
});

export const DateContainer = st('div', {
  background: '$card',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem 0',
  height: '12rem',
  color: '$text',
  '.ant-picker': {
    border: '1px solid $text',
    width: 'clamp(13rem, 50%, 20rem)',
    height: '2.5rem',
    marginTop: '1rem',

    borderRadius: '50rem',
    input: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export const Calendar = st(DatePicker, {});
