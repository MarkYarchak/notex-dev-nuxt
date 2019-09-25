<template>
  <v-container></v-container>
</template>

<script>
import indexon from './study.ts';
import { nothingUseful } from './study.ts'

export default {
  name: "index",
  mounted() {
    console.log(indexon);
    console.info(nothingUseful);
  },
};
</script>

<style scoped>

</style>
