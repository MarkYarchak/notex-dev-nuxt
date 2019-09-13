<template>
  <div>
    <h1>{{ params }}</h1>
  </div>
</template>

<script>
export default {
  name: "_id",
  asyncData: ({params}) => ({
    params,
  }),
};
</script>

<style scoped>

</style>
