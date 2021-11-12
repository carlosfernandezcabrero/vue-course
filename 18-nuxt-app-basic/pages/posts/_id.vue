<template>
  <div class="post">
    <div class="detail md-cont n-row">
      <div class="card n-row">
        <div class="header">
          <h3>{{ post.title }}</h3>
          <nuxt-link class="btn" to="/blog">Back</nuxt-link>
        </div>
        <hr class="divider" />
        <small>By {{ post.name }}</small>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import PostModel from '~/models/post.model'
import UserModel from '@/models/user.model'

export default Vue.extend({
  /*
  // This other way to retrieve data
  async created() {
    const postData = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    )

    const postModel = postData.data as PostModel
    const userData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${postModel.userId}`
    )

    const { name } = userData.data as UserModel
    this.post = { ...postModel, name }
  },
  */
  async asyncData({ params }) {
    const postData = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${params.id}`
    )

    const postModel = postData.data as PostModel
    const userData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${postModel.userId}`
    )

    const { name } = userData.data as UserModel
    const post = { ...postModel, name }
    return { post }
  },
  data() {
    return {
      post: {},
    }
  },
})
</script>

<style scoped>
.card {
  background-color: #334756;
  padding-inline: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  background-color: #3f72af;
  color: white;
}

.btn:hover {
  background-color: #112d4e;
}
</style>
