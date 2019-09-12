<template>
  <v-card
    width="700"
    class="mb-2 ml-1 mr-1"
  >
    <v-window v-model="postWindowPosition">
      <v-window-item :value="1">
        <v-toolbar elevation="0">
          <v-toolbar-title>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-subheader>
            {{ moment(moment().format()).fromNow() }}
          </v-subheader>
        </v-toolbar>
        <v-card-title>
          {{ dog.name }}
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                First text (title)
              </v-list-item-title>
              <v-list-item-subtitle>
                Second text (subtitle)
              </v-list-item-subtitle>
              <v-list-item-content>
                This is the list item content section
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>
                  And this section is the list item action text of list
                </v-list-item-action-text>
                <v-btn
                  dark
                  color="green darken-2"
                >
                  <font-awesome-icon :icon="['fas', 'edit']" class="fa-lg" />
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn
            dark
            block
            color="orange darken-2"
            @click="postWindowPosition = 2"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-window-item>

      <v-window-item :value="2">
        <v-toolbar elevation="0">
          <v-avatar size="50">
            <v-img src="https://source.unsplash.com/random"></v-img>
          </v-avatar>
          <v-toolbar-title>
            <v-subheader>Mark Yarchak</v-subheader>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-subheader>
            {{ moment(moment().format()).fromNow() }}
          </v-subheader>
        </v-toolbar>
        <v-img
          src="https://source.unsplash.com/random"
          aspect-ratio="1"
          height="300"
          contain
        ></v-img>
        <v-card-title>
          {{ dog.name }}
        </v-card-title>
        <v-card-text>
          <div style="display: flex; flex-direction: column;">
            <strong>Dog id:</strong> {{ dog.id }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            outlined
            color="orange darken-2"
            @click="postWindowPosition = 1"
          >
            Edit
          </v-btn>
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
            color="blue"
            @click="postWindowPosition = 3"
          >
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
          </v-btn>
        </v-card-actions>
      </v-window-item>

      <v-window-item style="min-height: 100%;" :value="3">
        <v-toolbar>
          <v-btn
            outlined
            color="orange darken-2"
            @click="postWindowPosition = 2"
          >
            Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-subheader>
            {{ moment(moment().format()).fromNow() }}
          </v-subheader>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
        <v-card-actions>
          <v-text-field
            label="Leave comment..."
          ></v-text-field>
          <v-btn
            outlined
            color="blue darken-1"
            @click="postWindowPosition = 2"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OnePostCard',
  props: {
    dog: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    moment,
    postWindowPosition: 2,
  }),
};
</script>

<style scoped>

</style>
