<script setup>

//Exemplo

import { defineProps } from "vue";
defineProps({
  label: String,
  type: {
    type: String,
    default: "button"
  }
});
</script>

<template>
  <button class="btn">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}
.btn:hover {
  background-color: #2c8c6b;
}
</style>
