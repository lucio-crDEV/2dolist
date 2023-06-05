<template>
  <div class="home">
    <div class="bg-amber-900/60 topBackGround w-full max-h-80">
      <div
        class="flex flex-wrap flex-col xl:relative xl:bottom-4 xl:gap-y-6 formWrapp"
      >
        <div class="flex-auto mx-auto">
          <h3
            class="text-4xl font-bold text-white animate__animated animate__fadeIn relative bottom-4"
          >
            {{ biendenivda1 }}
            <br />
          </h3>
        </div>
        <div
          class="relative lg:right-8 lg:mx-auto z-30 lg:mb-16 w-screen px-6 mt-4"
        >
          <!-- Aquí se renderiza el componente FormInput.vue -->
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
      src="https://i.imgur.com/NTRJiBdh.jpg"
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
      /* texto descriptivo */
      beforeText: "Descubre una forma ",
      emphasizedText: "sencilla y eficiente",
      middleText: "de organizar tus tareas.",
      endText:
        "Regístrate y comienza a crear tu lista personalizada de tareas pendientes y tareas realizadas. Podrás establecer la prioridad de cada tarea y realizar un seguimiento de tus avances.",
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

/* Media queries para tablet */
@media (max-width: 1024px) {
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

/* Media queries para celular */
@media (max-width: 640px) {
  img {
    display: none;
  }
  .formWrapp {
    top: 2rem;
  }
}
</style>
