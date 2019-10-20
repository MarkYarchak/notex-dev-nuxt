<template>
  <div></div>
</template>

<script>
import indexon from './study.ts';
import { nothingUseful } from './study.ts';

export default {
  name: "index",
  layout: 'account',
  mounted() {
    console.log(indexon);
    console.info(nothingUseful);
  },
};
</script>

<style
  lang="stylus"
  scoped>

  /*.scrolling-messages_container::-webkit-scrollbar*/
  /*  display: block*/
  /*  max-width: 9px*/
  /*.scrolling-messages_container::-webkit-scrollbar-thumb*/
  /*  background: #fff*/
  /*.scrolling-messages_container::-webkit-scrollbar-track-piece*/
  /*  background-color: #fff*/
  /*.scrolling-messages_container::-webkit-scrollbar-button*/
  /*  background-color: #fff*/
  /*  height: 1px*/
  /*.scrolling-messages_container:hover::-webkit-scrollbar-thumb*/
  /*  background-color: #c8c8c8*/
  /*.scrolling-messages_container:hover::-webkit-scrollbar-track-piece*/
  /*  background-color: #ebebeb*/
  /*.scrolling-messages_container:hover::-webkit-scrollbar-button*/
  /*  background-color: #c8c8c8*/

.scrolling-messages_container {
  &::-webkit-scrollbar {
    display: block
    max-width: 9px
  }
  &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-button {
    background: #fff
  }
  &::-webkit-scrollbar-button {
    height: 1px
  }
  &:hover {
    &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-button {
      background-color: #c8c8c8
    }
    &::-webkit-scrollbar-track-piece {
      background-color: #ebebeb
    }
  }
}
</style>
