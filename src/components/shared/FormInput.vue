<template>
  <div class="container mb-24">
    <div class="input-container">
      <label>{{ emailLabel }}</label>
      <input
        v-model="emailValue"
        type="email"
        :placeholder="emailPlaceholder"
        @input="validate"
        required
        :pattern="emailPattern"
      />
    </div>
    <div class="input-container">
      <label>{{ passwordLabel }}</label>
      <input
        v-model="passwordValue"
        type="password"
        :placeholder="passwordPlaceholder"
        @input="validate"
        required
      />
    </div>
    <div class="input-container">
      <label>{{ confirmPasswordLabel }}</label>
      <input
        v-model="confirmPasswordValue"
        type="password"
        :placeholder="confirmPasswordPlaceholder"
        @input="validate"
        required
      />
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <button class="submit-button" @click="subscribe">Suscribirse</button>
  </div>
</template>

<style scoped>
.container {
  max-height: max-content;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: rgba(36, 174, 224, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

label {
  color: #fff;
}

input {
  cursor: pointer;
  outline: none;
  color: black;
  border-radius: 8px;
  padding: 0.6rem;
}

.error-message {
  color: red;
  margin-top: 0.5rem;
}

.submit-button {
  margin: 3rem 0 1rem 0;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #24aee0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const emailLabel = "Correo Electrónico";
    const emailValue = ref("");
    const emailPlaceholder = "Correo";
    const emailPattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
    const passwordLabel = "Contraseña";
    const passwordValue = ref("");
    const passwordPlaceholder = "Contraseña";
    const confirmPasswordLabel = "Confirmar Contraseña";
    const confirmPasswordPlaceholder = "Confirmar Contraseña";
    const confirmPasswordValue = ref("");
    const errorMessage = ref("");

    const validate = () => {
      const emailRegex = new RegExp(emailPattern);
      if (!emailRegex.test(emailValue.value)) {
        errorMessage.value = "Correo electrónico inválido";
        return;
      }

      if (passwordValue.value !== confirmPasswordValue.value) {
        errorMessage.value = "Las contraseñas no coinciden";
        return;
      }

      errorMessage.value = "";
    };

    const subscribe = () => {
      // Lógica para suscribirse
      alert("Solicitud enviáda");
    };

    return {
      emailLabel,
      emailValue,
      emailPlaceholder,
      emailPattern,
      passwordLabel,
      passwordValue,
      passwordPlaceholder,
      confirmPasswordLabel,
      confirmPasswordPlaceholder,
      confirmPasswordValue,
      errorMessage,
      validate,
      subscribe,
    };
  },
});
</script>
