<template>
  <div class="home">
    <h3>
      {{ biendenivda1 }}
      <br />
    </h3>
    <p>
      {{ beforeText }}
      <strong>{{ emphasizedText }}</strong>
      {{ middleText }}
      <br />
      {{ endText }}
    </p>
  </div>
  <div class="absolute lg:top-96 lg:mt-36">
    <img
      class="flex-auto rounded-full relative lg:bottom-96 bottom-56 mx-auto animate__animated lg:px-0 px-6 animate__fadeIn drop-shadow-xl z-0 scale-75"
      alt="registrate"
      src="@/assets/working.jpg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
