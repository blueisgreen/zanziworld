import { defineStore } from 'pinia'

export const useWhatSayYouStore = defineStore('whatsayyou', {
  state: () => ({
    messages: [],
  }),
  getters: {
    latest: (state) => state.messages[state.messages.length - 1],
  },
  actions: {
    addMessage(message) {
      const envelope = {
        by: 'me',
        message,
        createdAt: new Date(),
      }
      this.messages.push(envelope)
    },
  },
})
