/* eslint-disable @typescript-eslint/no-throw-literal */
import { parseCookies } from "nookies";

import { InvalidToken } from "errors/custom-error";

import { notify } from "./notify";

// Please, use with try/catch
const utils = {
  getToken: () => {
    const token = parseCookies()['auth::token'];

    if (!token) {
      throw new InvalidToken('Seu token expirou, faça login novamente').get();
    }
    return token;
  },
  handleError: (message: any) => { 
    notify(message, 'error');
  }
}

export { utils };