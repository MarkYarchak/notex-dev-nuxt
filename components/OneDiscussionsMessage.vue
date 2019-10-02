<template>
  <div
    class="one_message"
    :class="{'blue lighten-4': isSelected }"
    @click="selectMessage"
  >
    <div class="one_message_header">
      {{ interlocutor }}
    </div>
    <div class="one_message_content black--text">
      {{ message }}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate deleniti dolorem doloremque ipsum magni mollitia optio possimus, qui repellendus. Autem earum facere molestiae perferendis provident repellendus reprehenderit ut! Vero.
    </div>
    <div class="one_message_footer">
      <div style="color: #858585">{{ moment().format() }}</div>
      <div style="display: flex;">
        <font-awesome-icon
          class="reply_button manage-icon"
          :icon="['fas', 'reply']"
          @click.prevent=""
        />
        <font-awesome-icon
          class="edit_button manage-icon"
          :icon="['far', 'edit']"
          @click.prevent=""
        />
        <font-awesome-icon
          class="delete_button manage-icon"
          :icon="['far', 'trash-alt']"
          @click.prevent=""
        />
      </div>
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
    padding: 10px 0 10px 15px;
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
    color dodgerblue
    font-weight: bold
  .one_message_content
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
}
</style>
