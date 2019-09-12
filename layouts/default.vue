<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <v-app dark>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
      >
        <v-list>
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
          @click="$router.push('/login')"
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
      <v-footer
        :fixed="fixed"
        app
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      drawer: this.$vuetify.breakpoint.lgAndUp,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Notex Dev System'
    };
  },
  methods: {
    receiveData() {
      this.$axios.post('http://localhost:3000/graphql', {
        query: '{ dogs { name, id } }'
      })
        .then((res) => console.log(res));
    },
  },
};
</script>
