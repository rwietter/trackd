/* eslint-disable sonarjs/no-duplicate-string */
import { st } from 'ui';

export const Dashboard = st('div', {
  padding: '0 1rem',
  diplsay: 'flex',
  flexDirection: 'column',

  '@media (min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: '70rem',
    margin: '0 auto',
    gap: '1rem',
  },
});
