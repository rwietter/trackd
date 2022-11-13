/* eslint-disable lines-between-class-members */
import { KaboomParams, IMapErrorName } from './types';

const errorName: IMapErrorName = {
  ERR_USER_OR_PASSWORD_NOT_FOUND: 'Usuário ou senha não encontrado',
  ERR_INVALID_PASSWORD: 'Senha inválida',
  ERR_INVALID_TOKEN: 'Token inválido',
  ERR_EXPIRED_TOKEN: 'Seu login expirou, faça login novamente',
  ERR_MISSING_REQUIRED_FIELDS: 'Campos obrigatórios não preenchidos',
  ERR_SOMETHING_WENT_WRONG: 'Algo deu errado :(',
  ERR_USER_ALREADY_EXISTS: 'Este usuário já está cadastrado',
  ERR_SCHEDULE_ALREADY_EXISTS: 'Já existe uma agenda para esta semana',
  ERR_PROVIDE_EMAIL_AND_PASSWORD: 'Por favor, forneça um email e senha válidos',
  ERR_USER_NOT_FOUND: 'Usuário não encontrado',
  ERR_SCHEDULE_DATA_NOT_FOUND: 'Não há agenda para a semana selecionada',
  ERR_FAILED_TO_DELETE_SCHEDULE: 'Ocorreu um erro ao deletar a agenda',
} as const;

const mapError = (name: string): string => errorName[name] || 'Aconteceu um erro! Tente novamente mais tarde';

export class Kaboom extends Error {
  name: string = '';
  message: string = '';
  stack: string = '';

  constructor(error: Error) {
    super(error.message);
    this.name = error.message || 'ERR_SOMETHING_WENT_WRONG';
    this.message = mapError(error.message || 'ERR_SOMETHING_WENT_WRONG');
    this.stack = error.stack || '';
  }

  getError(): KaboomParams {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
    };
  }
}
