<script setup lang="ts">


</script>


<template>
  <div class="corner-panel">

    <div class="corner-panel-container">

      <img src="../../assets/Picolo.jpeg" alt="">
      <p >Cauê Kempe Rodrigues</p>

    </div>

  </div>
</template>

<style scoped>
.corner-panel {
  width: 100%;
  height: 30%;

  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;
  
}

.corner-panel-container {
  width: 80%;
  height: 80%; 
  padding: 0.5rem;
  gap: 1rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;

  border-bottom: 0.5px solid var(--gray);
}

img {
  width: 10rem;  
  height: 10rem; 
  border-radius: 50%; 
  object-fit: cover; 
}


/* p {
  padding: 0;
  margin: 0;
} */
</style>
