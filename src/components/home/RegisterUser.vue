<template>
  <div class="home">
    <div class="bg-amber-900 topBackGround w-full">
      <div class="flex flex-wrap flex-col">
        <div class="flex-auto mx-auto">
          <h3
            class="text-4xl font-bold mb-16 lg:mb-6 lg:mt-28 mt-8 text-white animate__animated animate__pulse animate__fast"
          >
            {{ biendenivda1 }}
          </h3>
          <h3
            class="text-4xl font-bold mt-8 text-white animate__animated animate__pulse animate__faster animate__delay-2s"
          >
            {{ biendenivda2 }}{{ biendenivda3 }}
          </h3>
          <br />
        </div>
        <br />
        <div class="mx-auto z-30">
          <!-- Aquí se renderiza el componente FormInput.vue -->
          <FormInput />
        </div>
        <!-- Otros elementos del formulario de registro -->
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 h-16">
    <FooterPage />
  </div>

  <div class="absolute lg:top-96 lg:mt-36 lg:right-28 h-24">
    <img
      class="flex-auto rounded-2xl relative lg:bottom-96 bottom-56 lg:right-96 mx-auto animate__animated lg:px-0 px-6 animate__fadeIn drop-shadow-xl z-0 scale-75"
      alt="registrate"
      src="@/assets/registrate.jpg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormInput from "../shared/FormInput.vue";
import FooterPage from "../shared/FooterPage.vue";

export default defineComponent({
  components: {
    FormInput,
    FooterPage,
  },
  name: "RegisterUser",
  data() {
    return {
      /* Bienvenida */
      biendenivda1: "Regístrate",
      biendenivda2: "Fácil",
      biendenivda3: " y Rápido",
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
