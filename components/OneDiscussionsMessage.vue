<template>
  <div
    class="one_message"
    :class="{ 'one_message-selected': isSelected }"
    @click="selectMessage"
  >
    <div>
      <div class="one_message_header">
        {{ interlocutor }}
      </div>
      <div class="one_message_content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate deleniti dolorem doloremque ipsum magni mollitia optio possimus, qui repellendus. Autem earum facere molestiae perferendis provident repellendus reprehenderit ut! Vero.
      </div>
      <div class="one_message_footer">
        {{ new Date() }}
      </div>
    </div>
    <div
      :class="{ 'one_message_right': !isSelected, 'one_message_right-selected': isSelected }"
    >
      <v-btn
        icon
        large
        color="orange"
      >
        <font-awesome-icon
          :icon="['far', 'edit']"
          style="font-size: 23px;"
        />
      </v-btn>
      <v-btn
        icon
        large
        color="red"
      >
        <font-awesome-icon
          :icon="['far', 'trash-alt']"
          style="font-size: 23px;"
        />
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneDiscussionsMessage',
  props: {
    interlocutor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
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
    padding: 10px 0 10px 15px;
  }
  .one_message-selected {
    cursor: pointer
    background-color: rgba(173, 224, 255, 0.76)
    display: flex
  }
  .one_message_header
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
    color #858585
  .one_message_right
    display: none
  .one_message_right-selected
    display: block
</style>
