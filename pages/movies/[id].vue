<script setup>
const route = useRoute();

// {"Response":"False","Error":"Incorrect IMDb ID."}

const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=3bcd8b6&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Error"],
    key: `/movies/${route.params.id}`,
  }
);

if (data.value.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
</script>

<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>