import { st } from "ui";

export const Button = st('button', {
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '600',
  textAlign: 'center',
  padding: '0 20px',
  transition: 'all .15s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',

  variants: {
    size: {
      sm: {
        fontSize: '16px',
        width: 'auto',
        height: '30px',
      },
      md: {
        fontSize: '18px',
        width: 'auto',
        height: '35px',
      },
      lg: {
        fontSize: '21px',
        width: 'auto',
        height: '40px',
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