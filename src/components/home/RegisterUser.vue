<template>
  <div class="home">
    <div class="bg-amber-900 topBackGround w-full">
      <div class="flex flex-wrap flex-col">
        <div class="flex-auto w-64 mx-auto">
          <h3
            class="text-4xl font-bold mb-16 lg:mb-6 lg:mt-28 mt-8 text-white animate__animated animate__fadeIn"
          >
            {{ biendenivda1 }}
            <br />
          </h3>
        </div>
        <br />
        <div class="mx-auto">
          <!-- Aquí se renderiza el componente FormInput.vue -->
          <FormInput />
        </div>
        <!-- Otros elementos del formulario de registro -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormInput from "../shared/FormInput.vue";

export default defineComponent({
  components: {
    FormInput,
  },
  name: "RegisterUser",
  data() {
    return {
      /* Bienvenida */
      biendenivda1: "Regístrate",
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
