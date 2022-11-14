/* eslint-disable react/display-name */
/* eslint-disable prettier/prettier */
import { forwardRef, SVGProps } from "react";

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
  }
})

const CalendarIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref) => {
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
      <rect x={4} y={5}
        width={16} height={16}
        rx={2}
      />
      <path d="M16 3v4M8 3v4M4 11h16M8 15h2v2H8z" />
    </SVG>
  )
})

export { CalendarIcon };
