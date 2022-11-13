/* eslint-disable sonarjs/no-duplicate-string */
import { Table as TableAntd } from 'antd'

import { st } from "ui";

export const CustomTable = st(TableAntd, {
  transition: '$transitonTheme, border 350ms ease 0s',

  '.ant-table-bordered': {
    transition: '$transitonTheme, border 350ms ease 0s',
    background: 'var(--colors-bg) !important',
  },

  '.ant-table-thead tr th': {
    transition: '$transitonTheme, border 350ms ease 0s',
    background: 'var(--colors-fg) !important',
    border: '1px solid var(--colors-fg) !important',
    color: 'var(--colors-text) !important',
  },

  '&& tbody > tr:hover > td': {
    transition: '$transitonTheme, border 350ms ease 0s',
    background: 'var(--colors-fg) !important',
  },

  'thead': {
    transition: '$transitonTheme, border 350ms ease 0s',
    border: '1px solid var(--colors-fg) !important',
  },

  '.ant-table-content>table, .ant-table-header>table': {
    transition: '$transitonTheme, border 350ms ease 0s',
    border: '1px solid var(--colors-fg) !important',
  },

  '.ant-input-number': {
    transition: '$transitonTheme, border 350ms ease 0s',
    border: '2px solid var(--colors-borderColor) !important',
    background: 'var(--colors-mediumBackground) !important',
    color: 'var(--colors-text) !important',
  },

  'tbody > tr > td > a': {
    transition: '$transitonTheme, border 350ms ease 0s',
    color: 'var(--colors-text) !important',
  },

  '.ant-input-number-input': {
    height: '1.7rem'
  },

  'tbody > tr > td.ant-table-cell.ant-table-column-sort.ant-table-cell-ellipsis': {
    transition: '$transitonTheme, border 350ms ease 0s',
    background: 'var(--colors-fg) !important',
  },

  'tbody': {
    transition: '$transitonTheme, border 350ms ease 0s',
    border: '1px solid var(--colors-fg) !important',
    color: 'var(--colors-text) !important',
  },

  '.ant-table-bordered>.ant-table-container': {
    transition: '$transitonTheme, border 350ms ease 0s',
    borderLeft: 'none !important',
  },
});