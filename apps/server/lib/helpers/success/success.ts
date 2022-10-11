import { ISuccess, IMapSuccessName } from './types';

const successName: IMapSuccessName = {
  SUCCESS_USER_CREATED: 'Usuário criado com sucesso',
  SUCCESS_USER_SIGNIN: 'Usuário logado com sucesso',
} as const;

const mapSuccess = (name: string): string => successName[name];

export const success = (successObject: ISuccess): ISuccess => ({
  message: successObject.message || mapSuccess(successObject.name),
  name: successObject.name,
  status: successObject.status,
  more_info: successObject.more_info,
  code: successObject.code,
  payload: successObject.payload,
});
