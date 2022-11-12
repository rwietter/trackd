/* eslint-disable react/style-prop-object */
/* eslint-disable react/display-name */
import { forwardRef, SVGProps } from "react";


const MenuIcon = forwardRef((props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 14 14"
      style={{ width: '18px', cursor: 'pointer', height: '18px', display: 'block', fill: 'rgba(55, 53, 47, 0.85)', flexShrink: 0, 'backfaceVisibility': 'hidden', }}
      {...props}
    >
      <path d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z" />
    </svg>
  )
});

export default MenuIcon;