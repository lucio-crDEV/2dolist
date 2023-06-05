<!-- FormRegister.vue -->
<template>
  <div id="wrapper">
    <div class="container">
      <div class="input-container gap-y-1">
        <label>{{ emailLabel }}</label>
        <input
          :label="emailLabel"
          v-model="emailValue"
          :placeholder="emailPlaceholder"
          type="email"
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          @input="validate"
        />
      </div>
      <div class="input-container">
        <label>{{ passwordLabel }}</label>
        <input
          :label="passwordLabel"
          v-model="passwordValue"
          :placeholder="passwordPlaceholder"
          type="password"
          @input="validate"
        />
      </div>
      <div class="input-container">
        <label>{{ confirmPasswordLabel }}</label>
        <input
          v-model="confirmPasswordValue"
          :placeholder="confirmPasswordPlaceholder"
          type="password"
          @input="validate"
        />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button
        class="submit-button"
        @click="subscribe"
        :disabled="hasErrors || isAnyFieldEmpty"
      >
        Registrarme
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailLabel: "Correo Electrónico",
      emailValue: "",
      emailPlaceholder: "Correo",
      passwordLabel: "Contraseña",
      passwordValue: "",
      passwordPlaceholder: "Contraseña",
      confirmPasswordLabel: "Confirmar Contraseña",
      confirmPasswordValue: "",
      confirmPasswordPlaceholder: "Confirmar Contraseña",
      errorMessage: "",
    };
  },
  computed: {
    hasErrors() {
      return this.errorMessage !== "";
    },
    isAnyFieldEmpty() {
      return (
        this.emailValue === "" ||
        this.passwordValue === "" ||
        this.confirmPasswordValue === ""
      );
    },
  },
  methods: {
    validate() {
      if (!this.isValidEmail(this.emailValue)) {
        this.errorMessage = "Correo electrónico inválido";
      } else if (this.passwordValue !== this.confirmPasswordValue) {
        this.errorMessage = "Las contraseñas no coinciden";
      } else {
        this.errorMessage = "";
      }
    },
    isValidEmail(email) {
      // Validación del correo electrónico mediante una expresión regular
      const emailRegex = new RegExp("[^\\s@]+@[^\\s@]+\\.[^\\s@]+");
      return emailRegex.test(email);
    },
    subscribe() {
      // Lógica para suscribirse
      alert("Solicitud enviada. (En implementación con firebase aún)");
    },
  },
};
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
    padding: 1rem;
    border-radius: 10px;
    background: rgba(36, 174, 224, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
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
