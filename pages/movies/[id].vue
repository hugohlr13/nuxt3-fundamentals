<script setup>
const route = useRoute();

// {"Response":"False","Error":"Incorrect IMDb ID."}

const { data } = await useFetch(
  `https://www.omdbapi.com/?apikey=3bcd8b6&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Error", "Poster"],
    key: `/movies/${route.params.id}`,
  }
);

if (data.value.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>