<template>
  <div class="home">
    <div class="bg-amber-900/60 topBackGround w-full max-h-80">
      <div class="flex flex-wrap flex-col xl:relative xl:bottom-4 formWrapp">
        <div class="flex-auto mx-auto lg:relativa lg:left-96">
          <h3
            class="text-4xl font-bold text-white animate__animated animate__fadeIn relative bottom-4"
          >
            {{ biendenivda1 }}
            <br />
          </h3>
        </div>
        <div
          class="relative z-30 w-screen mt-4 px-6 lg:-mt-12 lg:pb-32 lg:left-32 lg:max-w-96 lg:px-96"
        >
          <!-- Aquí se renderiza el componente FormInput.vue -->
          <FormLogin class="lg:w-96" />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 -bottom-12 h-12">
    <FooterPage />
  </div>

  <div class="imgWrapper lg:relative lg:-top-96">
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
