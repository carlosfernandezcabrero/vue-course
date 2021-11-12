<template>
  <div class="field mt-6 mb-5">
    <label class="label has-text-centered">Username</label>
    <div class="control">
      <input type="text" class="input" v-model.trim="user.email" />
    </div>
  </div>
  <div class="field">
    <label class="label has-text-centered">Password</label>
    <div class="control">
      <input
        type="password"
        class="input"
        v-model.trim="user.password"
        autocomplete="off"
      />
    </div>
  </div>
  <!--<pre>{{ user }}</pre>-->
</template>

<script>
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const user = inject("user");

    return { user };
  },
});
</script>
