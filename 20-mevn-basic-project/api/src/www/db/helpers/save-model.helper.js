import mongoose from "mongoose";

export async function useSave(newData, nameCollection) {
  const Model = mongoose.model(nameCollection);
  const instance = new Model(newData);

  return await instance.save();
}
