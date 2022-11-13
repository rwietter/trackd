/* eslint-disable prettier/prettier */
import { Properties } from "../../@types";

type Schedule = {
  [key in keyof Properties]: any;
};

export type Props = {
  data: Schedule[] | null;
  loading?: boolean;
}