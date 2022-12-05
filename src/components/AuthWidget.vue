<template>
  <div class="boxy">
    <div class="q-gutter-sm">
      <q-radio v-if="!userStore.signedIn" v-model="mode" val="signIn" label="Sign In" />
      <q-radio v-if="userStore.signedIn" v-model="mode" val="signOut" label="Sign Out" />
      <q-radio v-if="!userStore.signedIn" v-model="mode" val="signUp" label="Join" />
      <q-radio v-if="!userStore.signedIn" v-model="mode" val="verify" label="Verify" />
    </div>
    <q-input
      v-if="mode !== 'signOut'"
      v-model="username"
      label="Username"
      hint="How we know it\'s you."
      hide-hint
    />
    <q-input
      v-if="mode === 'verify'"
      v-model="code"
      label="Verification code"
      hint="We sent this to the email address you gave us."
      hide-hint
    />
    <q-input
      v-if="mode === 'signUp'"
      v-model="password"
      type="password"
      label="Password"
      hint="Make it unique and tough to crack. We got rules..."
      hide-hint
    />
    <q-input
      v-if="mode === 'signIn'"
      v-model="password"
      :type="isHidePwd ? 'password' : 'text'"
      label="Password"
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
      v-if="mode === 'signUp'"
      v-model="email"
      label="Email"
      type="email"
      hint="Used to verify your account and when you forget your password."
      hide-hint
    />
    <q-input
      v-if="mode === 'signUp'"
      v-model="nickname"
      label="Alias"
      hint="A name you want to be known as."
      hide-hint
    />
    <q-btn label="Do It!" @click="handleAction" />
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
      mode: 'signIn',
      username: null,
      password: null,
      passwordVerify: null,
      email: null,
      nickname: null,
      code: null,
      isHidePwd: true,
      dense: true,
      isSignedIn: false,
    })
    const handleAction = async () => {
      switch (state.mode) {
        case 'signUp':
          await handleSignUp()
          break
        case 'signIn':
          await handleSignIn()
          break
        case 'signOut':
          await handleSignOut()
          break
        case 'confirm':
          await handleConfirmSignUp()
          break
        default:
      }
    }
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
      userStore,
      handleAction,
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
