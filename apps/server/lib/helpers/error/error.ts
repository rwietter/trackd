import { IError, IMapErrorName } from './types';

const errorName: IMapErrorName = {
  ERR_USER_OR_PASSWORD_NOT_FOUND: `Usuário ou senha não encontrado`,
  ERR_INVALID_PASSWORD: `Senha inválida`,
  ERR_INVALID_TOKEN: `Token inválido`,
  ERR_SOMETHING_WENT_WRONG: `Algo deu errado :(`,
  ERR_USER_ALREADY_EXISTS: `Este usuário já está cadastrado`,
  ERR_PROVIDE_EMAIL_AND_PASSWORD: `Por favor, forneça um email e senha válidos`,
  ERR_USER_NOT_FOUND: `Usuário não encontrado`,
} as const;

const mapError = (name: string): string => errorName[name] || `Erro não identificado`;

export const error = (errorObject: IError): IError => ({
  message: errorObject.message || mapError(errorObject.name),
  name: errorObject.name,
  status: errorObject.status,
  more_info: errorObject.more_info,
  code: errorObject.code,
});
