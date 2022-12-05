import { defineStore } from 'pinia'
import { DataStore } from '@aws-amplify/datastore'
import { ChatMessage } from '../models'

export const useWhatSayYouStore = defineStore('whatsayyou', {
  state: () => ({
    messages: [],
  }),
  getters: {
    latest: (state) => state.messages[state.messages.length - 1],
  },
  actions: {
    async addMessage(message) {
      const msg = new ChatMessage({
        who: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d',
        content: message,
      })
      await DataStore.save(msg)
      this.messages.push(msg)
    },
  },
})
