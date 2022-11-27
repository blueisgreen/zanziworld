import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    trackingId: null,
    user: null,
    accountId: -1,
    alias: 'Unknown',
  }),
  getters: {
    signedIn: (state) => !!state.user,
  },
  actions: {
    onUserSignIn(user) {
      this.user = user
    },
    onUserSignOut() {
      this.user = null
    }
  },
})
