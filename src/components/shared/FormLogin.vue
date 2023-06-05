<!-- FormLogin.vue -->
<template>
  <div class="container">
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
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <button class="submit-button" @click="login" :disabled="hasErrors">
      Iniciar sesión
    </button>
    <div class="register-link">
      ¿No tienes cuenta? <router-link to="/register">Regístrate</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const emailLabel = "Correo Electrónico";
    const emailValue = ref("");
    const emailPlaceholder = "Correo";
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordLabel = "Contraseña";
    const passwordValue = ref("");
    const passwordPlaceholder = "Contraseña";
    const errorMessage = ref("");

    const validate = () => {
      const emailRegex = new RegExp(emailPattern);
      if (!emailRegex.test(emailValue.value)) {
        errorMessage.value = "Correo electrónico inválido";
        return;
      }

      errorMessage.value = "";
    };

    const hasErrors = computed(() => {
      return errorMessage.value !== "";
    });

    const login = () => {
      // Lógica para iniciar sesión
      alert("Iniciando sesión");
    };

    return {
      emailLabel,
      emailValue,
      emailPlaceholder,
      emailPattern,
      passwordLabel,
      passwordValue,
      passwordPlaceholder,
      errorMessage,
      validate,
      hasErrors,
      login,
    };
  },
});
</script>

<style scoped>
.container {
  max-height: max-content;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.register-link {
  color: #fff;
  margin-top: 1rem;
  text-align: center;
}

.register-link a {
  color: #24aee0;
  cursor: pointer;
}
</style>
