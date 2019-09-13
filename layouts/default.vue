<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <v-app dark>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        bottom
        fixed
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        app
      >
        <template v-slot:prepend>
          <v-list>
            <v-list-item class="ml-3">
              <v-list-item-avatar size="60">
                <v-img src="https://source.unsplash.com/random/2"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item
              link
              two-line
              :to="`/profile/markyarchak`"
            >
              <v-list-item-content>
                <v-list-item-title class="title">Mark Yarchak</v-list-item-title>
                <v-list-item-subtitle>@markyarchak</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-menu-right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </template>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        color="blue darken-2"
        dark
        clipped-left
        fixed
        app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn
          icon
        >
          <font-awesome-icon :icon="['fas', 'copy']" class="fa-lg"/>
        </v-btn>
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-btn
          dark
          color="orange"
          class="mr-2"
          to="/login"
        >
          <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="fa-lg"/>
        </v-btn>
        <v-btn
          color="green"
          dark
          @click="receiveData"
        >
          Go
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
<!--      <v-footer-->
<!--        fixed-->
<!--        app-->
<!--      >-->
<!--        <span>&copy; {{ new Date().getFullYear() }}</span>-->
<!--      </v-footer>-->
    </v-app>
  </transition>
</template>

<script>
export default {
  async asyncData(data) {
    await console.log(data);
  },
  data () {
    return {
      drawer: this.$vuetify.breakpoint.lgAndUp,
      items: [
        {
          icon: 'mdi-briefcase',
          title: 'Workspaces',
          to: '/workspaces'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Collaborators',
          to: '/collaborators'
        },
        {
          icon: 'mdi-forum',
          title: 'Discussions',
          to: '/discussions'
        },
        {
          icon: 'mdi-account-group',
          title: 'Groups',
          to: '/groups'
        },
        {
          icon: 'mdi-file-document-box',
          title: 'Publications',
          to: '/publications'
        },
      ],
      title: 'Notex Dev System'
    };
  },
  methods: {
    receiveData() {
      this.$axios.post('http://localhost:3000/graphql', {
        query: '{ users { id, username } }'
      })
        .then((res) => console.log(res));
    },
  },
};
</script>
