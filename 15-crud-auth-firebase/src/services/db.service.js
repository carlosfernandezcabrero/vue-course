import { db } from "@/config/firebase";

export default class DBService {
  constructor() {
    this.doc = db.collection("bookmarks");
  }

  async getAll(user) {
    return await this.doc
      .where("userUid", "==", user.uid)
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
  }

  async addData(bookmark) {
    return await this.doc.add(bookmark);
  }

  async deleteBookmark(id) {
    return await this.doc.doc(id).delete();
  }

  async updateBookmark(bookmark) {
    return await this.doc.doc(bookmark.id).update(bookmark);
  }
}
