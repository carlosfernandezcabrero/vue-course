import mongoose from "mongoose";

export async function useUpdate(newData, nameCollection) {
  const model = mongoose.model(nameCollection);

  return await model.findOneAndUpdate({ _id: newData.id }, newData, {
    new: true
  });
}
