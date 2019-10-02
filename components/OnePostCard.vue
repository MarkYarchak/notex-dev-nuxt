<template>
  <v-card
    :width="$vuetify.breakpoint.mdAndUp ? 700 : $vuetify.breakpoint.smOnly ? 620 : ''"
    class="mb-3 ml-1 mr-1"
  >
    <v-window v-model="postWindowPosition">
      <v-window-item :value="2">
        <v-toolbar elevation="0" style="padding: 15px 5px 20px 5px;">
          <v-avatar size="64">
            <v-img src="https://source.unsplash.com/random"></v-img>
          </v-avatar>
          <v-toolbar-title>
            <span class="title-username-font">{{ user.username }}</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-subheader>
            {{ moment(moment().format()).fromNow() }}
          </v-subheader>
        </v-toolbar>
        <v-img
          src="https://source.unsplash.com/random"
          :lazy-src="require('../static/icon.png')"
          aspect-ratio="1"
          max-height="368"
          contain
          @load="onLoadImage"
        ></v-img>
        <v-card-title>
          {{ user.fullName }}
        </v-card-title>
        <v-card-text>
          <div style="display: flex; flex-direction: column;">
            <div>
              <strong>User id:</strong> {{ user.id }}
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            dark
            color="red"
          >
            <font-awesome-icon :icon="['fas', 'heart']" class="fa-lg" />
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            dark
            :x-large="$vuetify.breakpoint.mdAndUp"
            :large="$vuetify.breakpoint.smAndDown"
            color="blue"
            @click="postWindowPosition = 3"
          >
            <font-awesome-icon :icon="['fas', 'comments']" />
          </v-btn>
        </v-card-actions>
      </v-window-item>

      <v-window-item :value="3">
        <v-toolbar elevation="0">
          <v-toolbar-items>
            <v-btn
              text
              color="orange darken-2"
              @click="postWindowPosition = 2"
            >
              <font-awesome-icon :icon="['fas', 'arrow-left']" class="fa-lg" />
            </v-btn>

          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              color="blue darken-3"
              @click="fullScreenComments = true"
            >
              Full screen
            </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              color="blue darken-3"
              @click="fullScreenComments = true"
            >
              Full screen
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-sheet
            class="overflow-y-auto sheet-scroll"
            max-height="410"
          >
            <v-container style="height: 1500px;">

            </v-container>
          </v-sheet>
        </v-card-text>
        <v-card-actions>
          <v-text-field
            label="Leave comment..."
            class="pr-2 pl-1"
          ></v-text-field>
          <v-btn
            dark
            color="green"
            @click="postWindowPosition = 2"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-window-item>
    </v-window>
    <v-dialog
      v-model="fullScreenComments"
      fullscreen
    >
      <v-card>
        <v-toolbar elevation="0">
          <v-toolbar-items>
            <v-btn
              text
              color="orange darken-2"
            >
              <font-awesome-icon :icon="['fas', 'arrow-left']" class="fa-lg" />
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              dark
              color="blue darken-3"
              @click="fullScreenComments = false"
            >
              Small screen
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-sheet
            class="overflow-y-auto sheet-scroll"
            max-height="420"
          >
            <v-container style="height: 1500px;">

            </v-container>
          </v-sheet>
        </v-card-text>
        <v-card-actions>
          <v-text-field
            label="Leave comment..."
            class="pr-2 pl-1"
          ></v-text-field>
          <v-btn
            dark
            color="green"
            @click="postWindowPosition = 2"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OnePostCard',
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  apollo: {},
  data: () => ({
    moment,
    postWindowPosition: 2,
    fullScreenComments: false,
  }),
  methods: {
    onLoadImage(data) {
      // console.log(data)
    },
  },
};
</script>

<style
  lang="stylus"
  scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  .title-username-font
    color: #525252
    margin-left: 20px
    font-family: 'Raleway', sans-serif;
  .sheet-scroll::-webkit-scrollbar
    /*display: none*/
</style>
