<template>
  <nav class="bg-amber-900/60">
    <div
      class="animate__animated animate__fadeInDown animate__delay-1s lg:2text-xl md:text-xl text-red-700 font-semibold"
    >
      <router-link class="hover:text-red-600 text-red-700 cursor-pointer" to="/"
        >Inicio</router-link
      >
      |
      <router-link
        class="hover:text-red-600 text-red-700 cursor-pointer"
        to="/login"
        >Login</router-link
      >
      |
      <router-link
        class="hover:text-red-600 text-red-700 cursor-pointer"
        to="/register"
        >Registro</router-link
      >
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
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #fff;
}
</style>
