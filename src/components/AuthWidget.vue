<template>
  <div class="boxy">
    <q-input v-model="username" label="Username" stack-label :dense="dense" />
    <q-input
      v-model="code"
      label="Verification code"
      stack-label
      :dense="dense"
    />
    <q-input
      v-model="password"
      type="password"
      label="Password"
      stack-label
      :dense="dense"
    />
    <q-input
      v-model="password"
      :type="isHidePwd ? 'password' : 'text'"
      label="Password"
      stack-label
      :dense="dense"
    >
      <template #append>
        <q-icon
          :name="isHidePwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isHidePwd = !isHidePwd"
        />
      </template>
    </q-input>
    <q-input
      v-model="email"
      label="Email"
      stack-label
      type="email"
      :dense="dense"
    />
    <q-input v-model="nickname" label="Alias" stack-label :dense="dense" />
    <q-btn-group push>
      <q-btn label="Sign Up" @click="handleSignUp" />
      <q-btn label="Sign In" @click="handleSignIn" />
      <q-btn label="Sign Out" @click="handleSignOut" />
      <q-btn label="Confirm" @click="handleConfirmSignUp" />
    </q-btn-group>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useUserStore } from 'stores/user-store.js'
import { Auth } from 'aws-amplify'

export default {
  setup() {
    const userStore = useUserStore()
    const state = reactive({
      username: null,
      password: null,
      email: null,
      nickname: null,
      code: null,
      isHidePwd: true,
      dense: true,
      isSignedIn: false,
    })
    const handleSignUp = async () => {
      try {
        const { user } = await Auth.signUp({
          username: state.username,
          password: state.password,
          attributes: {
            email: state.email,
            nickname: state.nickname,
          },
          autoSignIn: {
            enabled: true,
          },
        })
        console.log(user)
        userStore.onUserSignIn(user)
      } catch (error) {
        console.log('error signing up:', error)
        alert(error)
      }
    }
    const handleSignIn = async () => {
      try {
        const user = await Auth.signIn(state.username, state.password)
        userStore.onUserSignIn(user)
        state.isSignedIn = true
      } catch (error) {
        console.log('error signing in', error)
        state.isSignedIn = false
        alert(error)
      }
    }
    const handleSignOut = async () => {
      try {
        await Auth.signOut()
        userStore.onUserSignOut()
        state.isSignedIn = false
      } catch (error) {
        console.log('error signing out: ', error)
        alert(error)
      }
    }
    const handleConfirmSignUp = async () => {
      try {
        await Auth.confirmSignUp(state.username, state.code)
        alert('confirmed')
      } catch (error) {
        console.log('error confirming sign up', error)
      }
    }
    return {
      ...toRefs(state),
      handleSignUp,
      handleSignIn,
      handleSignOut,
      handleConfirmSignUp,
    }
  },
}
</script>

<style lang="scss" scoped>
.boxy {
  border: 1px black solid;
  padding: 0.5em;
}
</style>
