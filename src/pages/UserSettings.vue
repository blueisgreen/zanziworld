<template>
  <div class="q-pa-md">
    <div class="text-h1 text-center breathing-room">Who Are You?</div>
    <amplify-auth-widget />
  </div>
</template>

<script setup>
import AmplifyAuthWidget from 'src/components/AmplifyAuthWidget.vue'
</script>

<style scss>
.breathing-room {
  padding-top: 0.25em;
  padding-bottom: 0.5em;
}
</style>
