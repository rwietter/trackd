import { styled } from "@/features/ui/theme";

export const Button = styled('button', {
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
        fontSize: '14px',
        width: '100px',
        height: '35px',
      },
      md: {
        fontSize: '14px',
        width: '150px',
        height: '40px',
      },
      lg: {
        fontSize: '20px',
        width: '200px',
        height: '50px',
      },
    },
    bg: {
      primary: {
        background: '#000000',
        color: '#ffffff',
        '&:hover': {
          background: '#ffffff',
          color: '#000000',
          border: '1px solid #000000',
        },
      },
      secondary: {
        background: '#ffffff',
        backgroundClip: 'padding-box',
        color: '#000000',
        border: '1px solid #000000',
        '&:hover': {
          background: '#000000',
          color: '#ffffff',
          border: '1px solid #0088E2',
        },
      },
    }
  },
})