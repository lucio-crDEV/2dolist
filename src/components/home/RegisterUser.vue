<template>
  <div class="home">
    <div class="bg-amber-900 topBackGround w-full">
      <div class="flex flex-wrap flex-col">
        <div class="flex-auto mx-auto">
          <h3
            class="relative right-96 text-5xl font-bold mb-16 lg:mb-8 lg:mt-16 mt-8 text-white animate__animated animate__pulse animate__fast animate__delay-1s"
          >
            {{ biendenivda1 }}
          </h3>
          <h3
            class="relative right-80 text-4xl font-bold mt-8 text-white animate__animated animate__pulse animate__fast animate__delay-2s"
          >
            {{ biendenivda2 }}{{ biendenivda3 }}
          </h3>
          <br />
        </div>
        <br />
        <div class="relative right-4 mx-auto z-30">
          <!-- Aquí se renderiza el componente FormInput.vue -->
          <FormInput />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0">
    <FooterPage />
  </div>

  <div class="absolute lg:top-80 lg:right-0 h-32">
    <img
      class="flex-auto rounded-2xl relative lg:bottom-80 mt-12 bottom-56 lg:right-72 mx-auto animate__animated lg:px-0 px-6 animate__fadeIn drop-shadow-xl z-0 scale-75"
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
    };
  },
});
</script>
