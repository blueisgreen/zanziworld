<template>
  <div>
    Hi. I am Zanzibar, and I can teach you about nuclear power. Who are you?
  </div>
  <div class="q-pa-md" style="width: 100%; max-width: 500px">
    <WhatSayYouEditor :editor="message" />
    <q-input v-model="message" outlined autogrow />
    <q-btn @click="handleAddMessage">Send</q-btn>
    <q-scroll-area style="height: 200px">
      <q-list separator>
        <q-item v-for="msg in whatsayyou.messages" :key="msg.createdOn">{{
          msg.message
        }}</q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script setup>
import WhatSayYouEditor from './WhatSayYouEditor.vue'
import { useWhatSayYouStore } from 'stores/whatsayyou-store.js'
import { ref } from 'vue'

const whatsayyou = useWhatSayYouStore()
const message = ref('Get this party started')
const handleAddMessage = () => {
  whatsayyou.addMessage(message.value)
  message.value = ''
}
</script>

<style lang="scss" scoped></style>
