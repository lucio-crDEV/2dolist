<template>
  <nav class="bg-amber-900">
    <div class="animate__animated animate__fadeInDown animate__delay-1s">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Registro</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e08624;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #e08624;
}

nav a.router-link-exact-active {
  color: #fff;
}
</style>
