<script setup>
import {reactive, ref} from "vue";
import FormInput from "./FormInput.vue";

const form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  birthday: "",
  phone: "",
  password: "",
  passwordRepeat: "",
})

function submit() {
  console.log(form.firstname)
}
</script>

<template>
  <form @submit.prevent="submit">
    <FormInput
        :required="false"
        v-model="form.firstname"
        label="Firstname"
        type="text"
        @input="form.firstname"
    />

    <br><br>
    <button type="submit">Test</button>
  </form>
</template>

<style scoped>

</style>