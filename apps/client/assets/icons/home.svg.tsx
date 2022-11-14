/* eslint-disable react/display-name */
/* eslint-disable prettier/prettier */
import { forwardRef, SVGProps } from 'react';

import { st } from 'ui';

const SVG = st('svg', {
  stroke: '$text',
  strokeWidth: 1,
  transition: 'stroke .4s ease, stroke-width .4s ease',
  '&.active': {
    stroke: '$text-hover',
    strokeWidth: 1.5,
  },
  '&:hover': {
    stroke: '$text-hover',
    strokeWidth: 1.5,
  },
})

const HomeIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={ref as any}
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
    </SVG>
  );
});

export { HomeIcon };
