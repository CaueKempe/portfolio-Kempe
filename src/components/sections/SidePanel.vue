<script setup lang="ts">
import CornerPanel from './CornerPanel.vue';
</script>

<template>
  <div class="side-panel">
    <CornerPanel />
    
    <div class="side-panel-container">
      <div class="sections-selector">
        <p>Block 1</p>
        <p>Block 2</p>
        <p>Block 3</p>
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
  border-right: 0.5px solid var(--gray);

  
}

.side-panel-container {
  width: 100%;
  height: 100%; 
    gap: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;

}

.sections-selector {
  padding: 0;
  color: var(--white);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: light;
}

</style>
