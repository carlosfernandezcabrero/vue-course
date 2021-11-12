<template>
  <div class="container--med">
    <div class="row-custom">
      <div class="cards-custom">
        <div class="card-custom" v-for="i in posts" :key="i.id">
          <h5 class="card__title-custom">{{ i.title }}</h5>
          <div class="card__body-custom">
            <p>{{ i.body }}</p>
          </div>
          <router-link :to="`/posts/${i.id}`">
            <Button />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/services/RestResource.js";
import Button from "@/components/Button";

export default {
  components: { Button },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    new Service().getData().then((r) => (this.posts = r));
  },
};
</script>

<style scoped>
.cards-custom {
  column-width: 18rem;
}
.card-custom {
  break-inside: avoid;
  margin-bottom: 1.1rem;
  border: gray solid 1px;
  border-radius: 2px;
  background-color: white;
}
.card__title-custom {
  margin-top: 0;
  margin-bottom: 15px;
  background-color: #219ebc;
  /*background-color: gray;*/
  color: white;
  padding-inline: 0.8rem;
  padding-top: 15px;
  padding-bottom: 10px;
}
.card__image {
  width: 100%;
}
.card__body-custom {
  padding-inline: 0.8rem;
}
</style>
