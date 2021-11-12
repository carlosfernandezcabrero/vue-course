import { db, user } from "@/config/firebase";
import { BookmarkModel } from "@/models/bookmark.model";

const doc = db.collection("bookmarks");

const getAll = async (): Promise<unknown> => {
  return await doc
    .where("userUid", "==", user.value?.uid)
    .get()
    .then((values) =>
      values.docs.map((dc) => {
        const bookmark = {
          ...dc.data(),
        };
        bookmark.id = dc.id;
        return bookmark;
      })
    )
    .catch((err) => err);
};

const addData = async (bookmark: BookmarkModel): Promise<unknown> => {
  return await doc.add(bookmark);
};

const deleteBookmark = async (id: string): Promise<unknown> => {
  return await doc.doc(id).delete();
};

const updateBookmark = async (bookmark: BookmarkModel): Promise<unknown> => {
  return await doc.doc(bookmark.id).update(bookmark);
};

export { getAll, addData, deleteBookmark, updateBookmark };
