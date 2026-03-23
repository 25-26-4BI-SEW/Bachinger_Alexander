<script lang="ts" setup>
import {computed, reactive} from 'vue'
import {useVuelidate} from '@vuelidate/core'
import {email, helpers, minLength, required, sameAs} from '@vuelidate/validators'

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  birthday: "",
  phoneNumber: "",
  password: "",
  passwordRepeat: "",
});

const rules = {
  firstName: {
    required:
      helpers.withMessage('First name is required', required)
  },
  lastName: {
    required:
      helpers.withMessage('Last name is required', required)
  },
  email: {
    required:
      helpers.withMessage('Email is required', required),
    email
  },
  birthday: {
    required:
      helpers.withMessage('Birthday is required', required)
  },
  phoneNumber: {},
  password: {
    required:
      helpers.withMessage('Password is required', required),
    minLength:
      helpers.withMessage('Password must be at least 3 characters', minLength(3))
  },
  passwordRepeat: {
    required:
      helpers.withMessage('Password Repeat is required', required),
    sameAs:
      helpers.withMessage('Passwords must match', sameAs(computed(() => state.password))),
    minLength:
      helpers.withMessage('Password must be at least 3 characters', minLength(3))
  }
}

const v$ = useVuelidate(rules, state);

</script>

<template>
  <form>
    <label for="firstName">First name<sup class="red">*</sup>:</label>
    <input id="firstName" v-model="state.firstName" placeholder="first name" required type="text"
           @blur="v$.firstName.$touch"/>
    <p v-for="error in v$.firstName.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <label for="lastName">Last name<sup class="red">*</sup>:</label>
    <input id="lastName" v-model="state.lastName" placeholder="last name" required type="text"
           @blur="v$.lastName.$touch"/>
    <p v-for="error in v$.lastName.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <label for="email">Email<sup class="red">*</sup>: </label>
    <input id="email" v-model="state.email" placeholder="email address" required type="email"
           @blur="v$.email.$touch"/>
    <p v-for="error in v$.email.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <label for="birthday">Birthday<sup class="red">*</sup>:</label>
    <input id="birthday" v-model="state.birthday" placeholder="birthday" required type="date"
           @blur="v$.birthday.$touch"/>
    <p v-for="error in v$.birthday.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <label for="phonenumber">Phone Number:</label>
    <input id="phonenumber" v-model="state.phoneNumber" placeholder="phone number" type="tel"
           @blur="v$.phoneNumber.$touch"/>
    <p v-for="error in v$.phoneNumber.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <label for="password">Password<sup class="red">*</sup>:</label>
    <input id="password" v-model="state.password" placeholder="password" required type="password"
           @blur="v$.password.$touch"/>
    <p v-for="error in v$.password.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <label for="passwordRepeat">Repeat password<sup class="red">*</sup>:</label>
    <input id="passwordRepeat" v-model="state.passwordRepeat" placeholder="password"
           type="password" @blur="v$.passwordRepeat.$touch"/>
    <p v-for="error in v$.passwordRepeat.$errors" :key="error.$uid">
      <small class="error-message">{{ error.$message }}</small>
    </p>

    <input :disabled="v$.$invalid" type="submit" value="Submit"/>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 35%;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 0.75em;
  margin: 2px;
}

.error-message {
  color: red;
  display: block;
}

.red {
  color: red;
}
</style>
