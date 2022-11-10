/* eslint-disable prettier/prettier */
export type Properties = {
  day: string;
  key: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta";
  border: boolean;
  records: string;
  isOld: boolean;
  records_available: string;
};

export type Schedule = {
  [key in keyof Properties]: any;
};