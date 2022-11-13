import { forwardRef, SVGProps } from 'react';

const DotsIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    ref={ref}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle
      cx={5} cy={12}
      r={1}
    />
    <circle
      cx={12} cy={12}
      r={1}
    />
    <circle
      cx={19} cy={12}
      r={1}
    />
  </svg>
));

export { DotsIcon };
