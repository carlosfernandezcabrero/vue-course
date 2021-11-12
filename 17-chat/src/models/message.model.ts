/* eslint-disable prettier/prettier */
import { UserModel } from "@/models/user.model";

export interface MessageModel {
  message   : string;
  timestamp : number;
  user      : UserModel;
  date      : string;
}
