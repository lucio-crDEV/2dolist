<template>
  <div class="home">
    <h3 class="text-red-600">
      {{ biendenivda1 }}
      <br />
    </h3>
    <h2>
      {{ bienvenida2 }}
    </h2>
    <img class="rounded-2xl" alt="Vue logo" src="@/assets/logo.jpg" />
    <p>
      {{ beforeText }}
      <strong>{{ emphasizedText }}</strong>
      {{ middleText }}
    </p>
    <h4>
      <br />
      {{ endText }}
    </h4>
    <p>{{ cualidades }}</p>
    <img alt="Vue logo" src="@/assets/pizarra.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      /* Bienvenida */
      biendenivda1:
        "¡Descubre nuestra sencilla y práctica aplicación de gestión de tareas",
      bienvenida2: "Comienza a mejorar tu productividad hoy mismo!",
      /* texto descriptivo */
      beforeText: "Descubre una forma ",
      emphasizedText: "sencilla y eficiente",
      middleText: "de organizar tus tareas.",
      endText:
        "Regístrate y comienza a crear tu lista personalizada de tareas pendientes y tareas realizadas.",
      cualidades:
        "Regístrate y comienza a crear tu lista personalizada de tareas pendientes y tareas realizadas.",
    };
  },
});
</script>
