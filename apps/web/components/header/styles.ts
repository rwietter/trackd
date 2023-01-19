/* eslint-disable import/order */
import { styled } from '@/features/ui/theme';
import MenuIcon from 'public/assets/menu';
import MenuOpenIcon from 'public/assets/menu-open';

export const Header = styled("header", {
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

export const RightContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MenuOpen = styled(MenuOpenIcon, {
  marginRight: "1rem",
});

export const MenuClose = styled(MenuIcon, {
  marginRight: "1rem",
});

export const Trackd = styled("h2", {
  all: "unset",
  fontSize: "1.4rem",
  fontFamily: "$sans",
  fontWeight: 900,
  cursor: "pointer",
  textGradient: "linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%)",
});

export const Toggle = styled("button", {
  background: 'none',
  color: '$text',
  outline: 'none',
  width: '2.5rem',
  height: '2.5rem',
  border: 'none',
  cursor: 'pointer',
});