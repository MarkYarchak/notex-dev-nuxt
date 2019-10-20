<template>
  <v-card
    :width="postCardWidth"
    max-width="500"
    class="mb-3"
    v-resize="onScreenResize"
  >
    <template v-if="!loading">
      <v-card-title>
        <v-row align="center" class="pl-1">
          <v-avatar size="55">
            <v-img src="https://source.unsplash.com/random"></v-img>
          </v-avatar>
          <span class="title-username-font">{{ user.username }}</span>
          <v-spacer></v-spacer>
          <v-subheader v-if="mdAndUp">
            {{ moment(moment().format()).fromNow($vuetify.breakpoint.smAndDown || undefined) }}
          </v-subheader>
          <v-btn
            class="sm-low"
            icon
          >
            <font-awesome-icon
              :icon="['fas', 'ellipsis-v']"
              @click.prevent=""
            />
          </v-btn>
        </v-row>
      </v-card-title>
      <div class="pt-1">
        <v-img
          src="https://source.unsplash.com/random"
          :lazy-src="require('../static/icon.png')"
          aspect-ratio="1"
          contain
          max-height="400"
          @load="onLoadImage"
        ></v-img>
        <!--      <v-card-title>-->
        <!--        {{ user.fullName }}-->
        <!--      </v-card-title>-->
        <!--      <v-card-text>-->
        <!--        <div style="display: flex; flex-direction: column;">-->
        <!--          <div>-->
        <!--            <strong>User id:</strong> {{ user.id }}-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </v-card-text>-->
      </div>
      <v-card-actions>
        <v-layout class="pt-1">
          <v-btn
            text
            rounded
            large
            color="red"
          >
            <font-awesome-icon :icon="['fas', 'heart']" class="fa-lg" />
            <span class="ml-1">538</span>
          </v-btn>
<!--          <v-btn-->
<!--            text-->
<!--            rounded-->
<!--            large-->
<!--            color="red"-->
<!--          >-->
<!--            <font-awesome-icon :icon="['fas', 'thumbs-up']" class="fa-lg" />-->
<!--            <span class="ml-1">538</span>-->
<!--          </v-btn>-->
<!--          <v-btn-->
<!--            text-->
<!--            rounded-->
<!--            large-->
<!--          >-->
<!--            &lt;!&ndash;          color="red"&ndash;&gt;-->
<!--            <font-awesome-icon :icon="['fas', 'thumbs-down']" class="fa-lg" />-->
<!--            <span class="ml-1">48</span>-->
<!--          </v-btn>-->
          <v-btn
            large
            rounded
            text
            color="blue"
            @click="openComments"
          >
            <font-awesome-icon :icon="['fas', 'comments']" />
            <span class="ml-1">74</span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            rounded
            large
            color="black"
            @click=""
          >
            <font-awesome-icon :icon="['fas', 'bullhorn']" />
            <span class="ml-1">21</span>
          </v-btn>
          <v-btn
            text
            icon
            rounded
            large
            color="black"
            @click=""
          >
            <v-icon>expand_more</v-icon>
            <!--          <span class="ml-1">173 w</span>-->
          </v-btn>
        </v-layout>
      </v-card-actions>
    </template>
    <template v-if="loading">
      <v-card>
        <v-skeleton-loader
          class="mx-auto"
          tile
          :transition="transition"
          type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto mb-3"
          boilerplate
          :transition="transition"
          type="list-item-two-line"
        ></v-skeleton-loader>
      </v-card>
    </template>
<!--    <v-btn-->
<!--      fixed-->
<!--      bottom-->
<!--      right-->
<!--      rounded-->
<!--      dark-->
<!--      x-large-->
<!--      color="deep-orange darken-1"-->
<!--      @click="loading = !loading"-->
<!--    >-->
<!--      Load-->
<!--    </v-btn>-->
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OnePostCard',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  apollo: {},
  data: () => ({
    moment,
    loading: true,
    transition: 'scale-transition',
    postCardWidth: 0,
    transitions: [
      {
        text: 'None',
        value: undefined,
      },
      {
        text: 'Fade Transition',
        value: 'fade-transition',
      },
      {
        text: 'Scale Transition',
        value: 'scale-transition',
      },
    ],
  }),
  mounted() {
    this.loading = false;
  },
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    cardWidth() {
      return this.$vuetify.breakpoint.mdAndUp ? 700 : this.$vuetify.breakpoint.smOnly ? 620 : '';
    },
  },
  methods: {
    openComments() {
      this.$emit('set-post-comments', this.post.comments);
    },
    onLoadImage(data) {
      this.loading = false;
    },
    onScreenResize() {
      const clientWidth = window.innerWidth;
      this.postCardWidth = this.$vuetify.breakpoint.smAndDown ? clientWidth : 580;
    },
  },
};
</script>

<style
  lang="stylus"
  scoped>
  @import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

  .title-username-font
    margin-left: 12px
    color: #525252
    font-size: 16px
    font-weight: bold
    font-family: 'Dosis', sans-serif;
  .sheet-scroll::-webkit-scrollbar
    /*display: none*/
</style>
