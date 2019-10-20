<template>
  <div id="main-page">
    <v-app-bar
      color="#1565C0"
      dark
      app
    >
      <v-toolbar-title style="margin-left: 20px;">
        <div style="display: flex; align-items: center;">
          <div class="main-toolbar-image"></div>
          <strong style="letter-spacing: 1px">Notex.cloud</strong>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div style="width: 330px; display: flex; justify-content: space-between;">
        <div>
          <a
            class="app-bar_center-button"
            href="#"
          >
            Start as customer
          </a>
        </div>
        <div>
          <a
            class="app-bar_center-button"
            href="#"
          >
            Support
          </a>
        </div>
        <div>
          <a
            class="app-bar_center-button"
            href="#"
          >
            Help
          </a>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        color="#FB8C00"
        to="/login"
      >
        Login as worker
      </v-btn>
    </v-app-bar>
    <v-content>
<!--      143429_original_3840x2934.jpg-->
<!--      143908_original_2848x4288.jpg-->
<!--      148824_original_3840x2160.jpg-->
<!--      149575_original_3840x2160.jpg-->
      <v-parallax
        dark
        :src="require('../static/abstractalbum/143429_original_3840x2934.jpg')"
      >
        <div style="display: flex; justify-content: center; align-items: center; flex-grow: 1; flex-direction: column; text-align: center;">
          <div>
            <h1 style="font-size: 55px; margin-bottom: 13px; text-shadow: 0 4px 8px #000000">Notex.cloud</h1>
          </div>
          <div>
            <h4 style="font-size: 30px; text-shadow: 0 4px 4px rgba(0,0,0,0.59); color: #ff9400">Work easy with your team!</h4>
          </div>
        </div>
      </v-parallax>
      <div style="margin: 0 auto; max-width: 1000px;">

        <div style="display: flex; justify-content: space-around; align-items: center; height: 180px; flex-wrap: wrap">
          <v-btn
            dark
            x-large
            color="#1976D2"
            to="/login"
          >
            <font-awesome-icon :icon="['fas', 'sign-in-alt']" style="margin-right: 15px;" />
            Start right now
          </v-btn>
          <v-btn
            outlined
            x-large
            color="#1976D2"
          >
            <font-awesome-icon :icon="['fas', 'share-alt']" style="margin-right: 15px;" />
            share with friends
          </v-btn>
        </div>
        <div style="display: flex; justify-content: space-around; padding: 20px 0; flex-wrap: wrap">
          <v-card
            v-for="(navigateCard, navCardI) in navigateCards"
            :key="navCardI"
            style="flex-basis: 320px"
          >
            <v-card-title>
              {{ navigateCard.title }}
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolores ea eaque eligendi error, hic libero pariatur placeat porro, quae recusandae suscipit vero, vitae.
              {{ navigateCard.text }}
            </v-card-text>
            <v-card-actions>
              <!--              <v-btn-->
              <!--                fab-->
              <!--                text-->
              <!--                small-->
              <!--                color="#424242"-->
              <!--              >-->
              <!--                <font-awesome-icon :icon="['fas', 'chevron-down']" style="font-size: 16px;" />-->
              <!--              </v-btn>-->
              <div style="color: #1976D2; width: 100px; margin-left: 7px;">{{ navigateCard.to }}</div>
              <div style="flex-grow: 3;"></div>
              <v-btn
                color="#1976D2"
                outlined
                :to="navigateCard.to"
              >
                Try it
                <font-awesome-icon :icon="['fas', 'arrow-right']" style="margin-left: 10px;" />
              </v-btn>
              <div style="flex-grow: 1;"></div>
            </v-card-actions>
          </v-card>
        </div>
        <div
          style="padding: 20px;"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur delectus, ullam vel? Adipisci aliquid aperiam, nobis quaerat quam quos sit totam unde veritatis? Asperiores eaque eligendi molestias non possimus! Ad aliquam animi, dolorum eligendi fugiat impedit iure minus molestiae necessitatibus repellat. Delectus dolores mollitia neque non perspiciatis. Accusantium alias animi atque, beatae deserunt ducimus et ex exercitationem impedit libero maxime neque nihil, possimus quia reiciendis reprehenderit tempora tempore unde vero voluptatum! Asperiores autem corporis explicabo odio pariatur? Asperiores deserunt dicta dignissimos eligendi, facilis nobis odit provident voluptatem! Architecto consectetur illum labore laborum. Accusantium asperiores autem esse ex, fugiat id ipsa iusto laudantium nobis non perspiciatis quae, quas, reprehenderit saepe tempore. Aut consequatur explicabo nobis possimus. Ab accusamus beatae culpa doloribus inventore itaque nihil odit soluta temporibus voluptas. Alias animi culpa doloribus enim, esse fugiat ipsa iste maiores nemo nobis porro quos reprehenderit soluta tenetur velit. Autem placeat veniam voluptatum. A ad amet assumenda doloribus illo magni quidem. Accusantium aliquid aperiam est expedita illo nisi, quidem repudiandae sit? Accusamus architecto atque consequatur deleniti dolorem dolores ea, enim error exercitationem expedita explicabo facilis fuga fugit ipsam laudantium libero maiores necessitatibus neque numquam possimus quam rerum saepe sint totam ullam voluptas voluptate voluptatem. Aliquam aliquid amet asperiores culpa cum ducimus eaque enim et eveniet ex ipsum iste itaque laboriosam magni maiores maxime minus molestiae nisi non obcaecati optio perferendis provident quis, quo rerum sit tempore tenetur totam, voluptate voluptates? Ex exercitationem iusto odio quidem quo.
          </p>
        </div>
        <div style="display: flex; justify-content: space-around; padding: 20px 0; flex-wrap: wrap">
          <v-card
            v-for="(navigateCard, navCardI) in navigateCards"
            :key="navCardI"
            style="flex-basis: 320px"
          >
            <v-card-title>
              {{ navigateCard.title }}
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolores ea eaque eligendi error, hic libero pariatur placeat porro, quae recusandae suscipit vero, vitae.
              {{ navigateCard.text }}
            </v-card-text>
            <v-card-actions>
              <div style="color: #1976D2; width: 100px; margin-left: 7px;">{{ navigateCard.to }}</div>
              <div style="flex-grow: 3;"></div>
              <v-btn
                color="#1976D2"
                outlined
                :to="navigateCard.to"
              >
                Try it
                <font-awesome-icon :icon="['fas', 'arrow-right']" style="margin-left: 10px;" />
              </v-btn>
              <div style="flex-grow: 1;"></div>
            </v-card-actions>
          </v-card>
        </div>
        <div style="padding: 20px;">
          <p>
            Lorem ipsum dolor sit amet, consectetur delectus, ullam vel? Adipisci aliquid aperiam, nobis quaerat quam quos sit totam unde veritatis? Asperiores eaque eligendi molestias non possimus! Ad aliquam animi, dolorum eligendi fugiat impedit iure minus molestiae necessitatibus repellat. Delectus dolores mollitia neque non perspiciatis. Accusantium alias animi atque, beatae deserunt ducimus et ex exercitationem impedit libero maxime neque nihil, possimus quia reiciendis reprehenderit tempora tempore unde vero voluptatum! Asperiores autem corporis explicabo odio pariatur? Asperiores deserunt dicta dignissimos eligendi, facilis nobis odit provident voluptatem! Architecto consectetur illum labore laborum. Accusantium asperiores autem esse ex, fugiat id ipsa iusto laudantium nobis non perspiciatis quae, quas, reprehenderit saepe tempore. Aut consequatur explicabo nobis possimus. Ab accusamus beatae culpa doloribus inventore itaque nihil odit soluta temporibus voluptas. Alias animi culpa doloribus enim, esse fugiat ipsa iste maiores nemo nobis porro quos reprehenderit soluta tenetur velit. Autem placeat veniam voluptatum. A ad amet assumenda doloribus illo magni quidem. Accusantium aliquid aperiam est expedita illo nisi, quidem repudiandae sit? Accusamus architecto atque consequatur deleniti dolorem dolores ea, enim error exercitationem expedita explicabo facilis fuga fugit ipsam laudantium libero maiores necessitatibus neque numquam possimus quam rerum saepe sint totam ullam voluptas voluptate voluptatem. Aliquam aliquid amet asperiores culpa cum ducimus eaque enim et eveniet ex ipsum iste itaque laboriosam magni maiores maxime minus molestiae nisi non obcaecati optio perferendis provident quis, quo rerum sit tempore tenetur totam, voluptate voluptates? Ex exercitationem iusto odio quidem quo.
          </p>
        </div>
        <div style="display: flex; justify-content: space-around; padding: 20px 0; flex-wrap: wrap">
          <v-card
            v-for="(navigateCard, navCardI) in navigateCards"
            :key="navCardI"
            style="flex-basis: 320px"
          >
            <v-card-title>
              {{ navigateCard.title }}
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolores ea eaque eligendi error, hic libero pariatur placeat porro, quae recusandae suscipit vero, vitae.
              {{ navigateCard.text }}
            </v-card-text>
            <v-card-actions>
              <div style="color: #1976D2; width: 100px; margin-left: 7px;">{{ navigateCard.to }}</div>
              <div style="flex-grow: 3;"></div>
              <v-btn
                color="#1976D2"
                outlined
                :to="navigateCard.to"
              >
                Try it
                <font-awesome-icon :icon="['fas', 'arrow-right']" style="margin-left: 10px;" />
              </v-btn>
              <div style="flex-grow: 1;"></div>
            </v-card-actions>
          </v-card>
        </div>
        <div style="padding: 20px;">
          <p>
            Lorem ipsum dolor sit amet, consectetur delectus, ullam vel? Adipisci aliquid aperiam, nobis quaerat quam quos sit totam unde veritatis? Asperiores eaque eligendi molestias non possimus! Ad aliquam animi, dolorum eligendi fugiat impedit iure minus molestiae necessitatibus repellat. Delectus dolores mollitia neque non perspiciatis. Accusantium alias animi atque, beatae deserunt ducimus et ex exercitationem impedit libero maxime neque nihil, possimus quia reiciendis reprehenderit tempora tempore unde vero voluptatum! Asperiores autem corporis explicabo odio pariatur? Asperiores deserunt dicta dignissimos eligendi, facilis nobis odit provident voluptatem! Architecto consectetur illum labore laborum. Accusantium asperiores autem esse ex, fugiat id ipsa iusto laudantium nobis non perspiciatis quae, quas, reprehenderit saepe tempore. Aut consequatur explicabo nobis possimus. Ab accusamus beatae culpa doloribus inventore itaque nihil odit soluta temporibus voluptas. Alias animi culpa doloribus enim, esse fugiat ipsa iste maiores nemo nobis porro quos reprehenderit soluta tenetur velit. Autem placeat veniam voluptatum. A ad amet assumenda doloribus illo magni quidem. Accusantium aliquid aperiam est expedita illo nisi, quidem repudiandae sit? Accusamus architecto atque consequatur deleniti dolorem dolores ea, enim error exercitationem expedita explicabo facilis fuga fugit ipsam laudantium libero maiores necessitatibus neque numquam possimus quam rerum saepe sint totam ullam voluptas voluptate voluptatem. Aliquam aliquid amet asperiores culpa cum ducimus eaque enim et eveniet ex ipsum iste itaque laboriosam magni maiores maxime minus molestiae nisi non obcaecati optio perferendis provident quis, quo rerum sit tempore tenetur totam, voluptate voluptates? Ex exercitationem iusto odio quidem quo.
          </p>
        </div>
      </div>
    </v-content>
    <v-footer
      padless
      datasrc="https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    >
      <v-card
        flat
        tile
        style="background-color: #1565C0; text-align: center; color: white"
      >
        <v-card-text>
          <v-btn
            v-for="(icon,ikey) in footerIcons"
            :key="ikey"
            style="color: white; margin: 0 15px;"
            icon
            x-large
          >
            <font-awesome-icon :icon="icon" style="font-size: 27px;" />
<!--            <v-icon size="24px">{{ icon }}</v-icon>-->
          </v-btn>
        </v-card-text>

        <v-card-text style="color: white">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text style="color: white">
          {{ new Date().getFullYear() }} — <strong>Notex</strong> <span style="margin-left: 40px;">&copy; Mark Yarchak</span>
        </v-card-text>
      </v-card>
    </v-footer>
    <v-fab-transition>
      <v-btn
        v-if="showFixedFiches"
        fixed
        bottom
        right
        fab
        dark
        style="margin-right: 30px; margin-bottom: 15px;"
        color="#1565C0"
        @click="$vuetify.goTo(0)"
      >
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      footerIcons: [
        ['fab', 'facebook'],
        ['fab', 'twitter'],
        ['fab', 'google-plus'],
        ['fab', 'linkedin'],
        ['fab','instagram'],
      ],
      navigateCards: [
        {
          title: 'Add and save notes',
          text: '',
          to: '/notes',
        },
        {
          title: 'Take a part in teams',
          text: '',
          to: '/teams',
        },
        {
          title: 'Create workspaces',
          text: '',
          to: '/workspaces',
        },
      ],
      showFixedFiches: false,
    };
  },
  mounted() {
    this.showFixedFiches = pageYOffset > 120 && this.$vuetify.breakpoint.mdAndUp;
    document.onscroll = () => {
      this.showFixedFiches = pageYOffset > 120 && this.$vuetify.breakpoint.mdAndUp;
    };
  },
};
</script>

<style
  lang="stylus"
  scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
  }

  .main-toolbar-image
    height: 40px
    width: 40px
    margin-right: 10px
    background: center center/cover no-repeat url("../static/not_useful/icons8-note-100.png")
  .app-bar_center-button
    padding: 10px 16px
    -webkit-border-radius: 18px
    -moz-border-radius: 18px
    border-radius: 18px
    color white
    cursor: pointer
    text-decoration none
  .app-bar_center-button:hover
    background-color: #fff
    color #1565C0
    transition 0.1s
  .app-bar_center-button:not(:hover)
    transition 0.3s


@media (max-width: 600px) {
  .app-bar_center-button {
    display: none
  }
}
</style>
