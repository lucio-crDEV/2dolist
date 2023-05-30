<template>
  <div class="bg-amber-900 topBackGround w-full">
    <div class="flex flex-wrap gap-64">
      <div class="flex-auto w-64">
        <h3
          class="text-4xl font-bold mb-16 lg:mt-28 mt-8 lg:mx-64 text-white animate__animated animate__fadeIn"
        >
          {{ biendenivda1 }}
          <br />
        </h3>
        <h2
          class="text-2xl lg:font-semibold mb-4 text-blue-300 animate__animated animate__fadeIn"
        >
          {{ bienvenida2 }}
        </h2>
      </div>
      <div>
        <img
          class="flex-auto rounded-2xl relative lg:top-24 bottom-56 lg:right-96 mx-auto animate__animated lg:px-0 px-6 animate__fadeIn animate__slower drop-shadow-xl"
          alt="App Logo"
          src="@/assets/logo.jpg"
        />
      </div>
    </div>
  </div>

  <div
    id="bajada"
    class="lg:mt-48 mt-32 mb-12 lg:mx-0 mx-6 animate__animated animate__fadeInUp animate__faster animate__delay-3s"
  >
    <div>
      <p class="text-2xl text-white font-semibold">
        {{ beforeText }}
        <strong class="text-orange-500">{{ emphasizedText }}</strong>
        {{ middleText }}
      </p>
      <h4>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      /* Bienvenida */
      biendenivda1:
        "¡Descubre nuestra sencilla y práctica aplicación de gestión de tareas!",
      bienvenida2: "Comienza a mejorar tu productividad hoy mismo",
      /* texto descriptivo */
      beforeText: "Descubre una forma ",
      emphasizedText: "sencilla y eficiente",
      middleText: "de organizar tus tareas",
      endText:
        "Regístrate y comienza a crear tu lista personalizada de tareas pendientes y tareas realizadas",
    };
  },
});
</script>

<style>
.topBackGround {
  height: 32rem;
}
</style>
