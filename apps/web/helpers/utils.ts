/* eslint-disable @typescript-eslint/no-throw-literal */
import { parseCookies } from "nookies";

import { AxiosResponse } from "axios";
import { InvalidToken } from "errors/custom-error";

import { notify } from "./notify";

// Please, use with try/catch
const tryUtils = {
  getToken: () => {
    const token = parseCookies()['auth::token'];

    if (!token) {
      throw new InvalidToken('Seu token expirou, faça login novamente').get();
    }
    return token;
  },
  isResponseOk: (response: AxiosResponse<any, any>, message: string, type: 'success' | 'error') => {
    if (!response.data.ok) {
      throw new Error(response.data.message);
    }
    notify(message, type);
  },
  handleError: (message: any) => { 
    notify(message, 'error');
  }
}

export { tryUtils };