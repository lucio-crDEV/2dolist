<template>
  <div class="bg-amber-900 topBackGround w-full">
    <div class="flex flex-wrap gap-64">
      <div>
        <img
          class="flex-auto rounded-2xl px-6 animate__animated animate__fadeIn animate__slower drop-shadow-xl mx-auto relative lg:top-24 bottom-56 lg:left-72 lg:px-0"
          alt="App Logo"
          src="@/assets/logo.jpg"
        />
      </div>
      <div class="flex-auto w-60 lg:relative lg:right-12 lg:top-20">
        <h3
          class="text-4xl font-bold mb-16 text-white animate__animated animate__fadeIn lg:mt-28 mt-8 lg:mx-56"
        >
          {{ biendenivda1 }}
          <br />
        </h3>
        <h2
          class="text-2xl lg:font-semibold mb-4 text-blue-200 animate__animated animate__fadeIn"
        >
          {{ bienvenida2 }}
        </h2>
      </div>
    </div>
  </div>
  <div
    id="bajada"
    class="lg:mt-48 mt-32 mb-12 lg:mx-0 mx-6 animate__animated animate__fadeInUp animate__slow animate__delay-1s"
  >
    <div>
      <p class="text-3xl text-white font-semibold">
        {{ beforeText }}
        <strong class="text-orange-500">{{ emphasizedText }}</strong>
        {{ middleText }}
      </p>
      <h4 class="font-bold text-2xl text-amber-600">
        <br />
        {{ endText2 }}
      </h4>
      <h4 class="font-semibold text-2xl text-amber-600">
        <br />
        {{ endText }}
      </h4>
    </div>
    <div class="mt-8">
      <img
        alt="Vue logo"
        class="mx-auto rounded-2xl lg:w-1/2 lg:px-0 px-6 drop-shadow-xl"
        src="@/assets/focus.jpg"
      />
    </div>
  </div>
  <GoUpButton
    v-if="showGoUpButton"
    class="relative bottom-20 right-2 animate__animated animate__fadeInUp animate__delay-1s"
    @click="scrollToTop"
  />
  <FooterPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterPage from "../shared/FooterPage.vue";
import GoUpButton from "../shared/GoUpButton.vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      /* Bienvenida */
      biendenivda1:
        "¡Descubre nuestra sorprendente y elegante aplicación de gestión de tareas!",
      bienvenida2:
        "Simplifica tu vida y mejora tu productividad con facilidad.",
      /* texto descriptivo */
      beforeText: "Descubre una forma ",
      emphasizedText: "sencilla y eficiente",
      middleText: "de organizar tus tareas",
      endText:
        "¡Regístrate y comienza a gestionar tus tareas como un profesional!",
      endText2:
        "Optimiza tu productividad, comienza ahora y ¡haz que cada día cuente!",
      showGoUpButton: false,
    };
  },
  components: { FooterPage, GoUpButton },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;
      this.showGoUpButton = scrollPercentage >= 80;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
</script>

<style>
.topBackGround {
  height: 32rem;
}
#bajada {
  background: rgba(36, 174, 224, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-left: 12rem;
  margin-right: 12rem;
  padding: 4rem 0rem;
}
</style>
