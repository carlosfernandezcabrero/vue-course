import { MessageModel } from "@/models/message.model";
import { UserModel } from "@/models/user.model";

export interface IState {
  currentUser: UserModel;
  unsubscribes: { (): void }[];
  messages: MessageModel[];
}

export const state: IState = {
  currentUser: {} as UserModel,
  unsubscribes: [],
  messages: [],
};
