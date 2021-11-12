<template>
  <div class="sidebar">
    <div class="close-btn" @click="closeSidebar">&times;</div>
    <div class="text-center n-row">
      <img
        :src="user.photoURL"
        alt="profile img"
        loading="lazy"
        class="img-rounded"
        width="150"
        height="150"
      />
    </div>
    <p class="mb-sm">
      <i class="fas fa-tachometer-alt fa-lg"></i>&nbsp;&nbsp;&nbsp;Dashboard
    </p>
    <p class="mb-sm">
      <i class="fas fa-user-circle fa-lg"></i>&nbsp;&nbsp;&nbsp;Account
    </p>
    <p><i class="fas fa-user-shield fa-lg"></i>&nbsp;&nbsp;&nbsp;Admin</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    function closeSidebar() {
      emit("closeSidebar");
    }

    return { closeSidebar };
  },
};
</script>

<style scoped>
.close-btn {
  font-size: 2rem;
  text-align: right;
  width: 100%;
  cursor: pointer;
}

.sidebar {
  position: absolute;
  width: 20rem;
  max-width: 100%;
  top: 0;
  height: 100vh;
  background-color: #f5f5f5;
  padding-inline: 2rem;
  color: black;
  height: 100%;
  box-shadow: 0 4px 12px rgb(0 0 0 / 30%);
}
</style>
