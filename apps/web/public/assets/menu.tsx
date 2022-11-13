/* eslint-disable react/style-prop-object */
/* eslint-disable react/display-name */
import { forwardRef, SVGProps } from "react";


const MenuIcon = forwardRef((props: SVGProps<SVGSVGElement>, ref: any) => {
  return (
    <svg
      viewBox="0 0 14 14"
      style={{ width: '18px', cursor: 'pointer', height: '18px', display: 'block', fill: 'var(--colors-text)', flexShrink: 0, 'backfaceVisibility': 'hidden', }}
      {...props}
      ref={ref}
    >
      <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z" />
    </svg>
  )
});

export default MenuIcon;