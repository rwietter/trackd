import { HTMLAttributes, ReactNode } from 'react';

export interface Item {
  key: string;
  day: string;
  records: string;
  records_available: string;
}

export interface EditableCellProps extends HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: 'day' | 'records' | 'records_available';
  title: string;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: ReactNode;
}

export type IWeek = {
  [key: string]: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta';
}

export type ITradWeek = {
  [key: string]: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
}

export type IRecord = {
  records: string;
}

export type IRecordA = {
  records_available: string;
}
