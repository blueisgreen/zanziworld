<template>
  <authenticator :sign-up-attributes="['preferred_username']">
    <template #default="{ user, signOut }">
      <div class="text-center">
        <h4>
          Hello
          {{ user.attributes.preferred_username || user.attributes.email }}!
        </h4>
        <p>({{ user.username }})</p>
        <button @click="signOut">Sign Out</button>
      </div>
    </template>
  </authenticator>
</template>

<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
</script>

<style lang="scss" scoped></style>
