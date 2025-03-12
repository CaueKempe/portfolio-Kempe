<script setup lang="ts">
import { ref } from 'vue';
import ContentPanel from './components/sections/ContentPanel.vue';
import Curriculum from './components/sections/Curriculum.vue';
import Header from './components/sections/Header.vue';
import SidePanel from './components/sections/SidePanel.vue';

// Estado para controlar a exibição do conteúdo
const paginaAtual = ref('portfolio');

const mudarPagina = (novaPagina: string) => {
  paginaAtual.value = novaPagina;
};
</script>

<template>
  <SidePanel />
  <div class="content-container">
    <Header @trocar-pagina="mudarPagina" />
    
    <div class="content">
      <ContentPanel v-if="paginaAtual === 'portfolio'" />
      <Curriculum v-if="paginaAtual === 'curriculo'" />
    </div>
  </div>
</template>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
}

.content {
  padding: 20px;
}
</style>
