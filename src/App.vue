<script setup lang="ts">
import ContentPanel from './components/sections/ContentPanel.vue';
import Header from './components/sections/Header.vue';
import SidePanel from './components/sections/SidePanel.vue';
</script>

<template>
    <SidePanel />
    <div class="content-container">
      <Header />
      <ContentPanel></ContentPanel>
      
    </div>
    
  
</template>

<style scoped>

.content-container{
  width: 100%;
  height: 100%;
}
</style>


