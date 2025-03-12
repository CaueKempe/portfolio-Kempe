<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['trocar-pagina']);
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="header-container">
        <div class="nav-links">
          <a href="#" @click.prevent="emit('trocar-pagina', 'portfolio')">Portfólio</a>
          <a href="#" @click.prevent="emit('trocar-pagina', 'curriculo')">Currículo</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.header-container {
  width: 50rem; 
  padding: 0.5rem;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-bottom: 0.5px solid var(--gray);
}

.nav-links {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  width: 100%;
}

.nav-links a {
  color: var(--white);
  text-decoration: none;
  font-weight: normal;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem; 
  cursor: pointer;
}

.nav-links a:hover {
  color: var(--cyan);
}
</style>
