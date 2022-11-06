<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="home" aria-label="Home" to="/home" />

        <q-toolbar-title> Zanzibar's World of Nuclear Power </q-toolbar-title>

        <div><q-btn label="What?" @click="doTheOtherThing" /></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'

const goHome = () => {
  console.log('go home!')
}
const doTheOtherThing = () => {
  console.log('do something else')
}
</script>
