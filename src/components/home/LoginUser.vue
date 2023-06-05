<!-- LoginUser.vue -->
<template>
  <div class="home">
    <div class="bg-amber-900/60 topBackGround w-full">
      <div
        class="flex flex-wrap flex-col xl:relative xl:bottom-4 xl:gap-y-6 formWrapp"
      >
        <div class="flex-auto mx-auto">
          <h3
            class="text-4xl font-bold text-white animate__animated animate__fadeIn"
          >
            {{ biendenivda1 }}
            <br />
          </h3>
        </div>
        <div class="mx-auto z-30 animate__animated animate__fadeIn">
          <FormLogin />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 h-12">
    <FooterPage />
  </div>

  <div class="imgWrapper">
    <img
      class="flex-auto rounded-full animate__animated animate__fadeIn animate__slower drop-shadow-xl z-0"
      alt="registrate"
      src="@/assets/img/working.jpg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLogin from "../shared/FormLogin.vue";
import FooterPage from "../shared/FooterPage.vue";

export default defineComponent({
  components: {
    FormLogin,
    FooterPage,
  },
  name: "HomePage",
  data() {
    return {
      /* Bienvenida */
      biendenivda1: "Login",
    };
  },
});
</script>

<style scoped>
img {
  position: absolute;
  top: 2rem;
  left: 6rem;
  transform: scale(0.65);
}

.formWrapp {
  position: relative;
  top: 4rem;
  row-gap: 4rem;
}

@media only screen and (max-width: 1575px) {
  h3 {
    margin: 2rem 0;
  }

  img {
    position: absolute;
    bottom: -16rem;
    left: 6rem;
    transform: scale(0.6);
  }

  .formWrapp {
    position: relative;
    bottom: 2rem;
    row-gap: 1rem;
  }

  .imgWrapper {
    position: relative;
    bottom: 43rem;
    right: 0rem;
  }
}
</style>
