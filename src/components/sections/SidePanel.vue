<script setup lang="ts">
import CornerPanel from './CornerPanel.vue';
</script>

<template>
  <div class="side-panel">
    <CornerPanel />
    
    <div class="side-panel-container">
      <div class="technologies">
        <img class="logo" src="../../assets/TS.png" alt="">
        <img class="logo" src="../../assets/js.png" alt="">
        <img class="logo" src="../../assets/python.png" alt="">
        <img class="logo" src="../../assets/react.png" alt="">
        <img class="logo" src="../../assets/GCP.png" alt="">
        <img class="logo" src="../../assets/vue.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-panel {
  width: 20rem;
  height: 100%;
  background-color: var(--black);
  color: var(--white);
}

.side-panel-container {
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.technologies {
  padding: 1rem;
  color: var(--white);
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}
</style>
