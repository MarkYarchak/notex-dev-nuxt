<template>
  <div @scroll="onContainerScroll">
    <v-toolbar
      id="messages_toolbar"
      dense
    >
      <v-spacer></v-spacer>
      <div><b>{{ 'undefined' }}</b></div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
        >
          <font-awesome-icon
            :icon="['fas', 'angle-double-left']"
            style="font-size: 17px;"
          />
        </v-btn>
      </v-toolbar-items>
      <v-btn
        class="sm-low"
        icon
      >
        <font-awesome-icon
          :icon="['fas', 'ellipsis-v']"
          @click.prevent=""
        />
      </v-btn>
    </v-toolbar>
    <v-layout
      justify-center
    >
      <v-lazy
        v-model="isActive"
        :options="{ threshold: .5 }"
        transition="fade-transition"
      >
        <v-list>
          <div class="pl-2 pr-2">
            <OnePostCard
              v-for="(user, uid) in users"
              :key="uid"
              :user="user"
              :post="{ comments: [1,2,3,4] }"
              @set-post-comments="setPostComments"
            />
          </div>
        </v-list>
      </v-lazy>
      <div
        v-if="mdAndUp"
        class="pt-2 pr-2"
      >
        <RightCommentsBar :comments="selectedPost.comments"/>
      </div>
    </v-layout>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import OnePostCard from '../../components/OnePostCard';
import RightCommentsBar from '../../components/publications/RightCommentsBar';

const subscribe = `

    subscription {
      newUser {
        username
        fullName
      }
    }
`;

export default {
  layout: 'account',
  inject: ['theme'],
  components: {
    OnePostCard,
    RightCommentsBar,
  },
  apollo: {
    users: gql`{
      users {
        id
        username
        fullName
      }
    }`,
  },
  data() {
    return {
      selectedPost: {
        comments: [],
      },
      isActive: false,
    };
  },
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    scrollHeight() {
      return window.document.scrollingElement.scrollHeight;
    },
  },
  mounted() {
    console.log(window.onscroll);
    window.document.scrollingElement.addEventListener('scroll', () => {
      window.document.scrollingElement.scrollHeight;
    });
  },
  methods: {
    setPostComments(commentsArr) {
      this.selectedPost.comments = commentsArr;
    },
    onContainerScroll(data) {
      console.log(data);
      console.log(1);
    },
  },
}
</script>
