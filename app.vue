<script setup>
useHead({
  titleTemplate: (titleChunk) =>{
    return titleChunk ? `${titleChunk} - Nuxt 3 Movie App` : "Nuxt 3 Movie App";
  }
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
