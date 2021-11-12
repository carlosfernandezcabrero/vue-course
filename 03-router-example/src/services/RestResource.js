export default class RestResource {
  async getData() {
    return await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => response.slice(0, 15));
  }

  async getDataId(id) {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (response) => response.json()
    );
  }
}
