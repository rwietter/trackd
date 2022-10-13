import { AxiosResponse } from "axios";

export interface IRespError extends AxiosResponse {
  response: {
    data: {
      message: string;
    }
  };
}