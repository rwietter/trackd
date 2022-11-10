/* eslint-disable react/display-name */
/* eslint-disable prettier/prettier */
import { forwardRef, SVGProps } from "react";

const CalendarIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-calendar-event"
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
    </svg>
  )
})

export { CalendarIcon };
