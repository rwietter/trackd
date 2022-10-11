type ISuccessName = {
  SUCCESS_USER_CREATED: string;
  SUCCESS_USER_SIGNIN: string;
}

export type IMapSuccessName = {
  [key: string]: string;
}

export interface ISuccess {
  status: 200 | 201 | 400 | 404 | 409 | 500, // http rest error status
  message?: string, // message error
  name: keyof ISuccessName, // error name
  code?: string, // code docs error
  more_info?: string // url for help
  hasError?: boolean // if has error
  payload?: {}
 }
