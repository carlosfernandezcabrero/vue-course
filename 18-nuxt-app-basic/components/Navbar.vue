<template>
  <div class="navbar md-cont n-row">
    <div class="links">
      <router-link to="/">
        <h5 class="link">Home</h5>
      </router-link>
      <span class="pipe">|</span>
      <router-link to="/blog">
        <h5 class="link">Blog</h5>
      </router-link>
      <span class="pipe">|</span>
      <router-link to="/about">
        <h5 class="link">About</h5>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}

.links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.pipe {
  color: #dbe2ef;
}

.link:hover {
  color: #FF4C29;
  cursor: pointer;
}
</style>
