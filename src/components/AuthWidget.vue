<template>
  <div></div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useUserStore } from 'stores/user-store.js'
import { Auth } from 'aws-amplify';

export default {
  setup() {
    const userStore = useUserStore()
    const state = reactive({
      count: 0,
    })
    const handleSignUp = async () => {
      try {
        const { user } = await Auth.signUp({ username, password })
        console.log(user)
        userStore.onUserSignIn(user)
      } catch (error) {
        console.log('error signing up:', error)
        alert(error)
      }
    }
    const handleSignIn = async () => {
      try {
        const user = await Auth.signIn(username, password)
        userStore.onUserSignIn(user)
      } catch (error) {
        console.log('error signing in', error)
        alert(error)
      }
    }
    const handleSignOut = async () => {
      try {
        await Auth.signOut()
        userStore.onUserSignOut()
      } catch (error) {
        console.log('error signing out: ', error)
        alert(error)
      }
    }
    return {
      ...toRefs(state),
      handleSignUp,
      handleSignIn,
      handleSignOut,
    }
  },
}
</script>

<style lang="scss" scoped></style>
