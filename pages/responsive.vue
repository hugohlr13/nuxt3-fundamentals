<script setup>
definePageMeta({
  layout: "plain",
});
</script>
<template>
  <NuxtImg src="/cat.jpg" sizes="xs:320vw sm:640vw md:768vw lg:1024vw xl:1280vw xxl:1536vw 2xl:1536vw" />
</template>

<style scoped>
img {
  display: block;
  max-width: 100%;
}
</style>