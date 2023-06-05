<!-- RegisterUser.vue -->
<template>
  <div class="home">
    <div class="bg-amber-900/60 topBackGround w-full max-h-80">
      <div class="flex flex-wrap flex-col">
        <div class="flex-auto mx-auto">
          <h3
            class="bienvenida1 text-white relative left-2 font-bold mb-16 mt-8 text-4xl lg:right-96 lg:text-5xl lg:mb-8 lg:mt-6 animate__animated animate__pulse animate__fast animate__delay-1s"
          >
            {{ biendenivda1 }}
          </h3>
          <div class="relative lg:right-80 bottom-6">
            <h3
              class="bienvenida2 text-3xl font-semibold mt-8 text-right text-white animate__animated animate__pulse animate__fast animate__delay-2s"
            >
              {{ biendenivda2 }}{{ biendenivda3 }}
            </h3>
          </div>
          <br />
        </div>
        <br />
        <div class="relative lg:right-8 lg:mx-auto z-30 lg:mb-16 w-screen px-6">
          <!-- Aquí se renderiza el componente FormInput.vue -->
          <FormRegister
            label="Nombre"
            v-model="nombre"
            placeholder="Ingrese su nombre"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="absolute lg:top-80 lg:right-0 h-40 hidden">
    <img
      id="imagenRegistro"
      class="rounded-2xl relative mx-auto px-6 animate__fadeIn drop-shadow-xl z-0 scale-50 bottom-56 animate__animated lg:block lg:bottom-80 lg:right-60 lg:px-0 md:bottom-80 md:right-48 md:px-0"
      alt="registrate"
      src="https://i.imgur.com/RqLFyi6h.jpg"
    />
  </div>

  <div class="absolute inset-x-0 bottom-0 text-center">
    <FooterPage id="footer" />
  </div>
</template>

<script defer lang="ts">
import { defineComponent } from "vue";
import FormRegister from "../shared/FormRegister.vue";
import FooterPage from "../shared/FooterPage.vue";

export default defineComponent({
  components: {
    FormRegister,
    FooterPage,
  },
  name: "RegisterUser",
  data() {
    return {
      /* Bienvenida */
      biendenivda1: "Regístrate",
      biendenivda2: "Fácil",
      biendenivda3: " y Rápido",
      nombre: "",
    };
  },
});
</script>
<style>
@media only screen and (max-width: 1575px) {
  .bienvenida1 {
    position: relative;
    right: 24rem;
    margin: 1rem 0 2rem 0;
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
  }
  .bienvenida2 {
    position: relative;
    right: 20rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    margin-top: 2rem;
  }
  #footer {
    position: relative;
    bottom: 1rem;
  }
}
</style>
