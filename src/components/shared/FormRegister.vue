<!-- FormRegister.vue -->
<template>
  <div id="wrapper">
    <div class="container">
      <div class="input-container">
        <Input
          :label="emailLabel"
          v-model="emailValue"
          :placeholder="emailPlaceholder"
          type="email"
          :pattern="emailPattern"
        />
      </div>
      <div class="input-container">
        <Input
          :label="passwordLabel"
          v-model="passwordValue"
          :placeholder="passwordPlaceholder"
          type="password"
        />
      </div>
      <div class="input-container">
        <Input
          :label="confirmPasswordLabel"
          v-model="confirmPasswordValue"
          :placeholder="confirmPasswordPlaceholder"
          type="password"
        />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button
        class="submit-button"
        @click="subscribe"
        :disabled="hasErrors || isAnyFieldEmpty"
      >
        Suscribirse
      </button>
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
    const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
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

    const hasErrors = computed(() => {
      return errorMessage.value !== "";
    });

    const isAnyFieldEmpty = computed(() => {
      return (
        emailValue.value === "" ||
        passwordValue.value === "" ||
        confirmPasswordValue.value === ""
      );
    });

    const subscribe = () => {
      // Lógica para suscribirse
      alert("Solicitud enviada");
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
      hasErrors,
      isAnyFieldEmpty,
      subscribe,
    };
  },
});
</script>

<style scoped>
.container {
  max-height: 40rem;
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

#wrapper {
  height: 20rem;
}

@media only screen and (max-width: 1575px) {
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
  #wrapper {
    height: 20rem;
  }
}
</style>
