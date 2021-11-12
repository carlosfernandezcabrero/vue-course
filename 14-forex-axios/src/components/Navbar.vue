<template>
  <div class="nav md-cont">
    <span class="brand">
      <p class="page-name link text-heavy">Forex</p>
    </span>
    <span class="links">
      <router-link to="/" class="link">Home</router-link>
    </span>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link {
  text-decoration: none;
  color: #80ed99;
  font-size: 1.25rem;
  padding-inline: 1rem;
}
.link:hover {
  color: #57cc99;
}
.link.router-link-active {
  border-bottom: #57cc99 solid 1px;
}
</style>
