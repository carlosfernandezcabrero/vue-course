<template>
  <div id="nav" class="nav">
    <router-link to="/" class="nav__link">HOME</router-link>
    <router-link to="/posts" class="nav__link">POSTS</router-link>
    <router-link to="/about" class="nav__link">ABOUT</router-link>
  </div>
  <hr />
  <router-view />
</template>

<style>
body {
  /*font-size: 16px;*/
  background-color: whitesmoke;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  padding-block: 30px 15px;
  display: flex;
  gap: 1.8rem;
  padding-inline: 0.8rem;
  width: 80%;
  margin: auto;
}

.nav__link {
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav__link.router-link-exact-active {
  color: #fb8500;
}

.container--med {
  display: flex;
  justify-content: center;
  margin-block: 30px;
}

.container--med > .row-custom {
  width: 80%;
}
.row-custom {
  padding-block: 15px;
}
.text--center {
  text-align: center;
}
</style>
