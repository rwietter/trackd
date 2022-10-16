import { AxiosResponse } from "axios";

export interface ResponseError extends AxiosResponse {
  response: {
    data: {
      message: string;
    }
  };
}