<script setup lang="ts">
import SmallContentBlock from './ SmallContentBlock.vue';
import iBatiLogo from '../../assets/iBati.png'; // Importação direta


</script>

<template>
  <div class="panel-container">

    <div class="twin-panel top">
      <SmallContentBlock :imgSrc="iBatiLogo" 
        title="Cargo"
        company="Nome da empresa"
        period="Jan 2020 - Dez 2023"
        description="Breve resumo das atividades" 
     />
      <SmallContentBlock title="Cargo" company="Nome da empresa" period="Jan 2020 - Dez 2023" description="Breve resumo das atividades" />
    </div>

    <div class="solo-panel">
      <SmallContentBlock title="Cargo" company="Nome da empresa" period="Jan 2020 - Dez 2023" description="Breve resumo das atividades" />
    </div>
    
  </div>
</template>

<style scoped>

.panel-container {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    /* background-color: var(--green); */

}

.twin-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-left: 2rem;
    margin-right: 2rem; 
    padding: 0;
    gap: 3rem;

}

.top{
    margin-top: 2rem;

}

.solo-panel {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 2rem;
    margin-right: 2rem; 
    padding: 0;
    gap: 1rem;
}
</style>

