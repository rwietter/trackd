type IErrorName = {
	ERR_USER_OR_PASSWORD_NOT_FOUND: string;
	ERR_INVALID_PASSWORD: string;
	ERR_INVALID_TOKEN: string;
	ERR_SOMETHING_WENT_WRONG: string;
	ERR_USER_ALREADY_EXISTS: string;
	ERR_PROVIDE_EMAIL_AND_PASSWORD: string;
	ERR_USER_NOT_FOUND: string;
}

export type IMapErrorName = {
	[key: string]: string;
}

export interface IError {
  status: 200 | 201 | 400 | 404 | 409 | 500, // http rest error status
	message?: string, // message error
	name: keyof IErrorName, // error name
  code?: string, // code docs error
	more_info?: string // url for help
	hasError?: boolean // if has error
 }
