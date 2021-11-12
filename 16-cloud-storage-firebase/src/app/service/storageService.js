import { storage } from "@/config/firebase";

export const uploadFile = async (path, file) => {
  const storageRef = storage.ref(path);
  return await storageRef
    .put(file)
    .then(async () => await storageRef.getDownloadURL());
};
