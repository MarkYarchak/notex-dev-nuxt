<template>
  <div
    class="one_message"
    :class="{'blue lighten-4': isSelected }"
    @click="selectMessage"
  >
    <div>
      <div class="one_message_header">
        {{ interlocutor }}
      </div>
      <div class="one_message_content">
        {{ message }}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate deleniti dolorem doloremque ipsum magni mollitia optio possimus, qui repellendus. Autem earum facere molestiae perferendis provident repellendus reprehenderit ut! Vero.
      </div>
      <div class="one_message_footer">
        <div style="color: #858585">{{ moment().format() }}</div>
<!--        <div style="display: flex;">-->
<!--          <font-awesome-icon-->
<!--            class="reply_button manage-icon"-->
<!--            :icon="['fas', 'reply']"-->
<!--            @click.prevent=""-->
<!--          />-->
<!--          <font-awesome-icon-->
<!--            class="edit_button manage-icon"-->
<!--            :icon="['far', 'edit']"-->
<!--            @click.prevent=""-->
<!--          />-->
<!--          <font-awesome-icon-->
<!--            class="delete_button manage-icon"-->
<!--            :icon="['far', 'trash-alt']"-->
<!--            @click.prevent=""-->
<!--          />-->
<!--        </div>-->
      </div>
    </div>
    <div class="right_message_side pr-1">
      <v-menu
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="grey darken-2"
            dark
            icon
            large
            v-on="on"
            class="right_message_side__manage-btn"
            @click="selectMessage"
          >
            <font-awesome-icon :icon="['fas', 'ellipsis-v']"/>
          </v-btn>
        </template>
        <v-row class="pl-3 pr-3">
          <v-list>
            <v-list-item
              @click=""
            >
              <v-list-item-title>
                <font-awesome-icon
                  :icon="['fas', 'reply']"
                  @click.prevent=""
                />
                Reply
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click=""
            >
              <v-list-item-title>
                <font-awesome-icon
                  :icon="['fas', 'copy']"
                  @click.prevent=""
                />
                Copy
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click=""
            >
              <v-list-item-title>
                <font-awesome-icon
                  :icon="['fas', 'globe']"
                  @click.prevent=""
                />
                Translate
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item
              @click=""
            >
              <v-list-item-title>
                <font-awesome-icon
                  :icon="['fas', 'arrow-alt-circle-right']"
                  @click.prevent=""
                />
                Forward
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click=""
            >
              <v-list-item-title>
                <font-awesome-icon
                  :icon="['fas', 'edit']"
                  @click.prevent=""
                />
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click=""
            >
              <v-list-item-title>
                <font-awesome-icon
                  :icon="['fas', 'trash-alt']"
                  @click.prevent=""
                />
                Delete
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </v-menu>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'OneDiscussionsMessage',
  props: {
    message: {
      type: Number,
      default: 0,
    },
    // message: {
    //   type: Object,
    //   default: () => ({}),
    // },
    interlocutor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      moment,
      isSelected: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  methods: {
    selectMessage() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style
  lang="stylus"
  scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Istok+Web|Lato|Roboto|Roboto+Condensed|Rubik&display=swap');



  .one_message {
    background-color: #fff
    padding: 10px 2px 10px 15px;
    display: flex
    /*margin-bottom: 4px*/
    /*-webkit-box-shadow 0 0 2px 0.02px grey*/
    /*-moz-box-shadow 0 0 2px 0.02px grey*/
    /*box-shadow 0 0 2px 0.02px grey*/
    /*-webkit-border-radius: 3px*/
    /*-moz-border-radius: 3px*/
    /*border-radius: 3px*/
    cursor: pointer
  }


  .one_message_header
    font-size: 16px
    display: flex
    color #363c47
    font-weight: bold
  .one_message_content
    font-size: 15px
    // font-family: 'Roboto', sans-serif;
    // font-family: 'Lato', sans-serif;
    // font-family: 'Roboto Condensed', sans-serif;
    // font-family: 'Fira Sans', sans-serif;
    // font-family: 'Rubik', sans-serif;
    // font-family: 'Istok Web', sans-serif;
  .one_message_footer
    display: flex
    justify-content: space-between
  .manage-icon
    margin-right: 15px
    cursor: pointer
    font-size: 19px
    color #565656
  .reply_button:hover
    color dodgerblue
  .delete_button:hover
    color red
  .edit_button:hover
    color #ff9200

@media (min-width: 960px) {
  .one_message:hover {
    background-color: #f0f0f0
  }
  .one_message .right_message_side {
    transform scale(0)
  }
  .one_message:hover .right_message_side {
    transition 0.3s
    transform scale(1)
  }
  .one_message.right_message_side__manage-btn {
    transition 0.5s
  }
  .one_message:not(:hover) .right_message_side {
    transform scale(0)
    transition 0.3s
  }
  .one_message:not(:hover) .right_message_side .right_message_side__manage-btn {
    transform scale(0)
    transition 0.5s
  }
}

</style>
