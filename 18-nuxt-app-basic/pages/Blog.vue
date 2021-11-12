<template>
  <div class="blog">
    <div class="posts md-cont n-row">
      <div v-for="(i, index) of articles" :key="index" class="post">
        <h4 class="post__title text-center mb-sm">{{ i.title }}</h4>
        <div class="buttons text-center">
          <nuxt-link :to="`/posts/${i.id}`" class="btn">Details</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import PostModel from '@/models/post.model'

export default Vue.extend({
  data() {
    return {
      articles: [] as PostModel[],
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'First Nuxt app',
        },
      ],
    }
  },
  async created() {
    const apiData = await axios.get(
      'http://jsonplaceholder.typicode.com/posts?_limit=15'
    )
    this.articles = apiData.data as PostModel[]
  },
})
</script>

<style scoped>
.posts {
  column-width: 18rem;
  gap: 1rem;
}

.post {
  background-color: #334756;
  break-inside: avoid;
  padding-inline: 1rem;
  padding-block: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 2px;
}

.btn {
  background-color: #3f72af;
  color: white;
}

.btn:hover {
  background-color: #112d4e;
}
</style>
