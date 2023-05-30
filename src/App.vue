<template>
  <nav class="bg-amber-900">
    <div
      class="animate__animated animate__fadeInDown animate__delay-1s text-2xl"
    >
      <router-link class="cursor-pointer" to="/">Inicio</router-link> |
      <router-link class="cursor-pointer" to="/login">Login</router-link> |
      <router-link class="cursor-pointer" to="/register">Registro</router-link>
    </div>
  </nav>
  <!-- Add the style and icon you want using the String format -->
  <font-awesome-icon
    class="text-white"
    icon="fa-solid fa-arrow-up"
    size="2xl"
  />
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  user-select: text;
  cursor: default;
}

#app {
  font-family: "Mulish", sans-serif;
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
