<template>
  <div>
    Hi. I am Zanzibar, and I can teach you about nuclear power. Who are you?
  </div>
  <div class="q-pa-md" style="width: 100%; max-width: 500px">
    <q-input v-model="message" outlined autogrow />
    <q-btn @click="handleAddMessage">Send</q-btn>
    <q-list separator>
      <q-item v-for="msg in whatsayyou.messages" :key="msg.createdOn">{{
        msg.message
      }}</q-item>
    </q-list>
  </div>
</template>

<script>
import { useWhatSayYouStore } from 'stores/whatsayyou-store.js'
import { ref } from 'vue'

export default {
  setup() {
    const whatsayyou = useWhatSayYouStore()
    const message = ref('')
    const handleAddMessage = () => {
      whatsayyou.addMessage(message.value)
      message.value = ''
    }
    return {
      whatsayyou,
      message,
      handleAddMessage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
