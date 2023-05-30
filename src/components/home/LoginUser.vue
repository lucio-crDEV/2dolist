<template>
  <div class="home">
    <div class="bg-amber-900/60 topBackGround w-full">
      <div class="flex flex-wrap flex-col">
        <div class="flex-auto mx-auto">
          <h3
            class="text-4xl font-bold mb-16 lg:mb-6 lg:mt-28 mt-8 text-white animate__animated animate__fadeIn"
          >
            {{ biendenivda1 }}
            <br />
          </h3>
        </div>
        <div class="mx-auto z-30 animate__animated animate__fadeIn">
          <!-- Aquí se renderiza el componente FormInput.vue -->
          <FormLogin />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 h-16">
    <FooterPage />
  </div>

  <div class="absolute lg:top-96 lg:mt-24 lg:left-64 h-24">
    <img
      class="flex-auto rounded-full relative lg:bottom-96 bottom-56 mx-auto animate__animated lg:px-0 px-6 animate__fadeIn animate__slower drop-shadow-xl z-0 scale-75"
      alt="registrate"
      src="@/assets/working.jpg"
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
