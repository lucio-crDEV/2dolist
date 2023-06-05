<template>
  <div class="bg-amber-900/60 h-80 max-w-full">
    <div class="flex flex-wrap gap-64">
      <div class="appLogoWrapper">
        <img
          class="appLogo flex-auto rounded-full scale-75 lg:scale-150 lg:relative lg:left-48 lg:top-12 animate__animated animate__fadeIn animate__slower drop-shadow-xl"
          alt="App Logo"
          src="https://i.imgur.com/kTaZYdhl.jpg"
        />
      </div>
      <div
        class="lg:flex-auto tituloWraper text-center lg:px-80 lg:relative lg:left-52 lg:top-16"
      >
        <h3
          class="text-3xl font-bold mb-16 text-white animate__animated animate__fadeIn lg:mx-56 lg:text-4xl lg:relative lg:left-20"
        >
          {{ biendenivda1 }}
          <br />
        </h3>
        <h2
          class="bienvenida2 relative left-6 text-2xl font-semibold mb-4 text-blue-100 lg:font-bold lg:mx-32 animate__animated animate__fadeIn hidden lg:block"
        >
          {{ bienvenida2 }}
        </h2>
      </div>
    </div>
  </div>
  <div
    id="bajada"
    class="animate__animated animate__fadeInUp animate__slow animate__delay-1s py-4 lg:relative lg:-top-6 lg:mx-48"
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
        src="https://i.imgur.com/haVOnFxh.jpg"
      />
    </div>
  </div>
  <GoUpButton
    v-if="showGoUpButton"
    class="relative bottom-36 lg:bottom-20 scale-50 right-2 animate__animated animate__fadeInUp animate__delay-1s"
    @click="scrollToTop"
  />
  <FooterPage />
</template>

<script defer lang="ts">
import { defineComponent, onMounted } from "vue";
import FooterPage from "../shared/FooterPage.vue";
import GoUpButton from "../shared/GoUpButton.vue";
import { app } from "@/config/firebaseConfig";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      biendenivda1:
        "¡Descubre nuestra sorprendente y elegante aplicación de gestión de tareas!",
      bienvenida2:
        "Simplifica tu vida y mejora tu productividad con facilidad.",
      beforeText: "Conoce una forma ",
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
    console.log(app);

    onMounted(() => {
      console.log("Componente HomePage montado");
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
</script>

<style>
.appLogoWrapper {
  position: absolute;
  left: 16rem;
  top: 4rem;
  width: 20rem;
}

.appLogo {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 9999px;
}

@media only screen and (max-width: 1575px) {
  .tituloWraper {
    position: relative;
    top: 2rem;
    left: 12rem;
    width: 20rem;
    padding: 0 8rem;
    margin: 0;
  }

  .bienvenida2 {
    padding: 0 16rem;
  }

  .appLogoWrapper {
    position: absolute;
    left: 8rem;
    bottom: 12rem;
    transform: scale(0.75);
  }

  #bajada {
    position: relative;
    bottom: 12rem;
  }
}

@media only screen and (max-width: 768px) {
  .tituloWraper {
    position: relative;
    top: 2rem;
    left: 2rem;
    padding: 0;
    margin: 0;
  }

  .bienvenida2 {
    font-size: 1.5rem;
  }

  .appLogoWrapper {
    display: none;
  }

  #bajada {
    position: relative;
    bottom: 4rem;
    margin: 0 2rem;
  }
}

#bajada {
  background: rgba(36, 174, 224, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
