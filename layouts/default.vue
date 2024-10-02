<script setup>
const user = useUser()
</script>
<template>
    <nav style="display: flex; gap: 10px;" >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io/">Vue School</NuxtLink>
      <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a href="#" v-else="isLoggedIn" @click.prevent="user.isLoggedIn= false">Logout</a> 
      Test
    </nav>
<slot></slot>
</template>