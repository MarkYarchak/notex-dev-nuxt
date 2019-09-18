<template>
  <div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <v-app dark>
        <v-navigation-drawer
          v-model="drawer"
          clipped
          bottom
          fixed
          dark
          color="grey darken-4"
          app
        >
<!--          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"-->
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
                color="orange darken-2"
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
              color="orange darken-2"
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
          color="orange darken-3"
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
            color="grey darken-3"
            class="mr-2"
            @click="logOutDialog = true"
          >
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="fa-lg"/>
          </v-btn>
        </v-app-bar>
        <v-content style="background-color: #fff;">
          <v-container>
  <!--          <v-btn-->
  <!--            color="green"-->
  <!--            dark-->
  <!--            @click="receiveData"-->
  <!--          >-->
  <!--            Go-->
  <!--          </v-btn>-->
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
    <v-dialog
      v-model="logOutDialog"
      max-width="290"
      dark
    >
      <v-card>
        <v-card-title class="headline">Log out</v-card-title>

        <v-card-text>
          Are you really want to logout from your account?
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            @click="logOutDialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="orange darken-1"
            to="/login"
          >
            Leave
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  // asyncData(data) {
  //   console.log(data);
  // },
  // middleware: ['authUser'],
  data () {
    return {
      logOutDialog: false,
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
          title: 'Organizations',
          to: '/organizations'
        },
        {
          icon: 'mdi-file-document-box',
          title: 'Publications',
          to: '/publications'
        },
        {
          icon: 'mdi-settings',
          title: 'Settings',
          to: '/settings'
        },
      ],
      title: 'Notex Dev System'
    };
  },
  methods: {
    receiveData() {
      this.$axios.post('http://localhost:3000/graphql', {
        query: '{ users { id, username, fullName } }'
      })
        .then((res) => console.log(res));
    },
  },
};
</script>
