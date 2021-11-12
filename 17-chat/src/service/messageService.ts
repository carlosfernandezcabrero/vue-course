import { firestore } from "@/config/firebase";
import store from "@/store";
import { MessageModel } from "./../models/message.model";

const getReference = () => firestore.collection("chats");

export const saveMessage = async (message: MessageModel): Promise<void> => {
  return await getReference().doc(message.timestamp.toString()).set(message);
};

export const getMessages = (numMessages: number): void => {
  const unsubscribe = getReference()
    .orderBy("timestamp", "desc")
    .limit(numMessages)
    .onSnapshot((data) => {
      const messages: MessageModel[] = [];
      data.docs.forEach((message) => {
        messages.unshift(message.data() as MessageModel);
      });
      store.dispatch("setMessages", messages);
    });

  store.dispatch("addUnsubscribe", unsubscribe);
};
