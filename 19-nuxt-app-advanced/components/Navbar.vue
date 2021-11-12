<template>
  <div class="navbar md-cont n-row">
    <div class="links">
      <router-link to="/" class="link">
        <h4>Home</h4>
      </router-link>
      <span class="pipe">|</span>
      <router-link to="/about" class="link">
        <h4>About</h4>
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
  color: #52616b;
}

.link:hover {
  color: var(--color-page-selected);
  cursor: pointer;
}

.link.nuxt-link-exact-active {
  color: var(--color-page-selected);
}
</style>
