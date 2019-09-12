<template>
  <v-layout
    justify-center
    align-center
  >
<!--    wrap-->
    <v-list>
      <OnePostCard
        v-for="(dog, di) in dogs"
        :key="di"
        :dog="dog"
      />
    </v-list>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag';
import OnePostCard from '../components/OnePostCard';

export default {
  layout: 'default',
  components: {
    OnePostCard,
  },
  apollo: {
    dogs: gql`{
      dogs {
        name
        id
      }
    }`,
  },
}
</script>
