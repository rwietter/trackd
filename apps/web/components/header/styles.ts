import { st } from 'ui';

export const Header = st("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".6rem 2rem",
  position: "relative",
  zIndex: 1,
  background: '$bg',
  borderBottom: '1px solid $borderColor',
  transition: '$transitonTheme, border 350ms ease 0s',
});

export const RightContainer = st("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Trackd = st("h2", {
  all: "unset",
  fontSize: "1.5rem",
  paddingLeft: "1.3rem",
  fontFamily: "$sans",
  fontWeight: 900,
  textGradient: "linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%)",
});

export const Toggle = st("button", {
  background: 'none',
  color: '$text',
  outline: 'none',
  width: '2.5rem',
  height: '2.5rem',
  border: 'none',
  cursor: 'pointer',
});