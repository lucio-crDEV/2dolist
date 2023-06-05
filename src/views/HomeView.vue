<template>
  <div class="home">
    <HomePage />
  </div>
</template>

<script defer lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; @ is an alias to /src
import HomePage from "@/components/home/HomePage.vue";

export default defineComponent({
  name: "2doList",
  components: {
    HomePage,
  },
});
</script>
