<script setup>
defineProps({
  type: String,
  label: String,
  modelValue: String,
  error: String,
  required: Boolean,
});
</script>

<template>
  <label :for="label">
    {{ label }}
    <span v-if="required">*</span>
    <br>
  </label>
  <input
      :id="label"
      :name="label"
      :required="required"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
  <!--      @input="$emit('input', $event.target.value)"-->
</template>

<style scoped>

</style>