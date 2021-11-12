<template>
  <div class="home">
    <div class="chatbox">
      <div class="sidebar">
        <h3 class="text-center sidebar__title">Rooms</h3>
        <div class="contacts">
          <p class="contact selected d-flex-center">
            <img
              class="img-rounded"
              src="@/assets/img/lock-solid.svg"
              alt="friends"
              width="60"
              height="60"
            /><span class="ml-xs">Private Room</span>
          </p>
          <p class="contact d-flex-center">
            <img
              class="img-rounded"
              src="@/assets/img/work.png"
              alt="friends"
              width="60"
              height="60"
            /><span class="ml-xs">Work Room</span>
          </p>
          <p class="contact d-flex-center">
            <img
              class="img-rounded"
              src="@/assets/img/friends.jpg"
              alt="friends"
              width="60"
              height="60"
            />
            <span class="ml-xs">Friends Room</span>
          </p>
        </div>
      </div>
      <div class="chat">
        <div class="messages-wrapper" id="messages">
          <div class="more text-center">
            <button class="btn mb-lg bg-blue" @click="moreMessages">
              More
            </button>
          </div>
          <div class="message-wrapper" v-for="i of messages" :key="i.timestamp">
            <div
              class="message mb-sm"
              :class="[uid === i.user.uid ? 'message-local' : 'message-remote']"
            >
              <img
                class="img-rounded"
                :src="i.user.photoURL"
                :alt="i.user.email"
                height="40"
                width="40"
                loading="lazy"
                v-show="uid !== i.user.uid"
              />
              <div class="message-body">
                <div
                  class="mb-xs message__author"
                  :class="[uid === i.user.uid ? 'text-right' : '']"
                >
                  {{ capitalizeString(i.user.displayName) }}
                </div>
                <div
                  class="message__text mb-xs"
                  :class="[
                    uid === i.user.uid
                      ? 'message__text-local'
                      : 'message__text-remote',
                  ]"
                >
                  {{ i.message }}
                </div>
                <div
                  class="message__time"
                  :class="[uid === i.user.uid ? 'text-right' : '']"
                >
                  {{ i.date }}
                </div>
              </div>
              <img
                class="img-rounded"
                :src="i.user.photoURL"
                :alt="i.user.email"
                height="40"
                width="40"
                loading="lazy"
                v-show="uid === i.user.uid"
              />
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter message ..."
          @keyup.enter.exact="send"
          v-model.trim="message"
          class="message-box"
        />
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("./Chat.css");
</style>

<script lang="ts">
import { NUM_MESSAGES, USER_COOKIE_NAME } from "@/config/globalVariables";
import { readLocalStorage } from "@/service/localStorageService";
import { getMessages, saveMessage } from "@/service/messageService";
import { computed, defineComponent, onUpdated, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const uid = readLocalStorage(USER_COOKIE_NAME);
    const messages = computed(() => store.getters.getMessages);
    const message = ref("");

    let numMessages = NUM_MESSAGES;
    let moreClicked = false;

    function capitalizeString(cad: string) {
      const word = cad.split(" ").map((r) => {
        const lower = r.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      });
      return word.join(" ");
    }

    function send() {
      const dateSpain = new Date();
      const user = store.getters.getCurrentUser;

      saveMessage({
        message: message.value,
        timestamp: Math.round(dateSpain.getTime() / 1000),
        user: user,
        date: dateSpain.toLocaleString("es"),
      }).then(() => {
        moreClicked = false;
        message.value = "";
      });
    }

    function scrollToBottom(id: string) {
      const myDiv = document.getElementById(id) as HTMLElement;
      myDiv.scroll({
        top: myDiv.scrollHeight,
        behavior: "smooth",
      });
    }

    function moreMessages() {
      numMessages += 10;
      getMessages(numMessages);
      moreClicked = true;
    }

    onUpdated(() => {
      if (moreClicked === false) {
        scrollToBottom("messages");
      }
    });

    getMessages(numMessages);

    return {
      send,
      message,
      messages,
      capitalizeString,
      uid,
      moreMessages,
    };
  },
});
</script>
