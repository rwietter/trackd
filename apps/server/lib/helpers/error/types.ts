export type IMapErrorName = {
  [key: string]: string;
}

export interface IError {
  message: string, // message error
  name: string, // error name
  ok: boolean, // if error is ok
  code?: string, // code docs error
  stack: string, // stack error
 }

export type KaboomParams = {
  message?: string;
  name?: string;
  moreInfo?: string;
  stack?: string;
  code?: number;
}
