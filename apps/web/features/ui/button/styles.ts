import { st } from "ui";

export const Button = st('button', {
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '600',
  textAlign: 'center',
  transition: 'all .15s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',

  variants: {
    size: {
      sm: {
        fontSize: '16px',
        width: '100px',
        height: '35px',
      },
      md: {
        fontSize: '18px',
        width: '150px',
        height: '40px',
      },
      lg: {
        fontSize: '21px',
        width: '200px',
        height: '50px',
      },
    },
    bg: {
      primary: {
        background: '$inverse',
        color: '$fg',
        '&:hover': {
          background: '$primary',
          color: '$fg',
        },
      },
      secondary: {
        background: '$inverse',
        backgroundClip: 'padding-box',
        color: '$fg',
        '&:hover': {
          background: '$tertiary',
          color: '$fg',
        },
      },
    }
  },
})