<script setup lang="ts">
defineProps<{
  title: string;         // Cargo ou função
  company: string;       // Nome da empresa
  period: string;        // Tempo de atuação (ex: "Jan 2020 - Dez 2023")
  description: string;   // Breve resumo das atividades
  imgSrc: string;        // Caminho da imagem do logo da empresa
}>();
</script>

<template>
    <div class="small-content-block">

        <div class="inner-container">
            <img :src="imgSrc" alt="Logo" class="company-logo">

            <div>
                <h3 class="title">{{ title }}</h3>
                <p class="company">{{ company }}</p>
                <p class="period">{{ period }}</p>
                <p class="description">{{ description }}</p>
            </div>
           
        </div>

    </div>
  
</template>

<style scoped>
.inner-container {
    width: 100%;
    height: 100%;
    padding: 1rem;

    border-radius: 3px;

    background: var(--gray);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    
    display:flex;
    align-items: center;
    gap: 2rem;

}

.small-content-block {
    width: 100%;
    height: 100%;
    padding: 1rem;
    

}

.small-content-block:hover {
  transform: scale(1.03);
}

.company-logo {
    width: 80px;  
    height: 80px;
    max-width: 80px;
    max-height: 80px;
    object-fit: contain;
    border-radius: 8px;
    background: white;
    padding: 5px; 
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--purple);
}

.company {
  font-size: 16px;
  font-weight: 500;
  color: var(--orange);
}

.period {
  font-size: 14px;
  color: var(--green);
}

.description {
  font-size: 14px;
  color: var(--white);
  margin-top: 8px;
}
</style>
