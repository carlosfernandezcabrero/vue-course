<template>
  <div class="container--med">
    <div class="row-custom">
      <figure>
        <blockquote class="blockquote text-center">
          <h1 class="quote">
            <span class="double-quotes double-quotes--big">"</span>
            {{ post.body }}
            <span class="double-quotes double-quotes--big">"</span>
          </h1>
        </blockquote>
        <figcaption class="blockquote-footer text-center">
          {{ post.title }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import Service from "@/services/RestResource.js";

export default {
  data() {
    return {
      post: {},
    };
  },
  created() {
    new Service().getDataId(this.$route.params.id).then((r) => (this.post = r));
  },
};
</script>

<style scoped>
.quote {
  font-style: oblique;
}
.double-quotes {
  font-style: normal;
}
.double-quotes--big {
  font-size: 10rem;
}
.blockquote-footer {
  font-size: 1.5rem !important;
}
</style>
