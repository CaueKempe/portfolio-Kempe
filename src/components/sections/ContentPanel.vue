<script setup lang="ts">
import SmallContentBlock from './ SmallContentBlock.vue';
import iBatiLogo from '../../assets/iBati.png'; 
import rubcubeLogo from '../../assets/rubcube.png'; 
import myRobot from '../../assets/myRobot.png';




</script>

<template>
  <div class="panel-container">

    <div class="twin-panel top">
      <SmallContentBlock 
        :imgSrc="iBatiLogo" 
        title="Desenvolvedor de Software Júnior"
        company="iBati"
        period="dez de 2024 - o momento · 4 meses"
        description="Como desenvolvedor júnior, ganhei mais autonomia e consegui trazer novas propostas e projetos, introduzindo bots de conversação e inteligência artificial para otimizar o sistema.
                    - Vertex AI
                    - Dialogflow CX
                    - JavaScript
                    - Python" 
     />
     <SmallContentBlock 
        :imgSrc="iBatiLogo" 
        title="Estagiário de desenvolvimento de software"
        company="iBati"
        period="ago de 2024 - dez de 2024 · 5 meses"
        description="No estágio, aprendi a trabalhar em um produto já em andamento, colaborando com a equipe para entender o projeto, manter a qualidade e implementar melhorias.
                    - Desenvolvimento full stack
                    - JQuery
                    - JavaScript
                    - PHP
                    - Banco de dado
                    - Document AI
                    - Google Cloud Platform (GCP)" 
     />
    </div>

    <div class="twin-panel">

      <SmallContentBlock 
        :imgSrc="rubcubeLogo" 
        title="Estagiário de desenvolvimento de software"
        company="Rubcube"
        period="mar de 2024 - jun de 2024 · 4 meses"
        description="Participei do RubCamp, um programa de profissionalização de profissionais no inicio da carreira de duração de 3 meses na RubCube. Nesse bootcamp aprendi a criar/planejar projetos utilizando as seguintes tecnologias:</br>
                    - TypeScript (Back-end, criação de API's utilizando arquitetura MVC)
                    - React Js (Front-end Web)
                    - React Native (Front-end Mobile(android))
                    - Python (Dashboard de dados)" 
        />
      <SmallContentBlock 
        :imgSrc="myRobot" 
        title="Instrutor de Robotica"
        company="My Robot"
        period="nov de 2020 - jul de 2022 · 1 ano 9 meses"
        description="Como instrutor de robótica tenho como objetivo auxiliar e desenvolver a criatividade e o desenvolvimento de meus alunos para que possam extrair o máximo que a robótica pode oferecer. Tentando sempre repassar todo o conhecimento que adquiri durante meu período como competidor." 
      />
    </div>
    
  </div>
</template>

<style scoped>

.panel-container {
    width: 100%;
    height: 100%;

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

