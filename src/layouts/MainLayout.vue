<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Zanzibar's World of Elemental Energy
        </q-toolbar-title>

        <div>on Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Within the Experience </q-item-label>
        <EssentialLink
          v-for="link in insideLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <div>&nbsp;</div>
      <q-separator />
      <q-list>
        <q-item-label header> Outside the Experience </q-item-label>
        <EssentialLink
          v-for="link in outsideLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const insideLinks = [
  {
    title: 'Welcome',
    caption: 'Explore the world of elemental energy',
    icon: 'fa-solid fa-atom',
    link: '/main',
  },
  {
    title: 'Lessons',
    caption: 'Learn about nuclear power',
    icon: 'fa-solid fa-chalkboard-user',
    link: '/main/lessons',
  },
  {
    title: 'Ask Zanzibar',
    caption: 'Offer feedback and suggestions',
    icon: 'fa-regular fa-comments',
    link: '/',
    stay: true,
  },
]
const outsideLinks = [
  {
    title: 'Essays',
    caption: "The Making of Zanzi's World",
    icon: 'fa-solid fa-rss',
    link: 'https://zanzisworld.substack.com/',
  },
  {
    title: 'Community',
    caption: "The Zanzi's World Community",
    icon: 'fa-solid fa-people-group',
    link: 'https://zanzisworldofnuclearpower.locals.com/',
  },
  {
    title: 'Twitter',
    caption: '@ZanzibarNuclear',
    icon: 'fa-brands fa-twitter',
    link: 'https://twitter.com/ZanzibarNuclear',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      insideLinks,
      outsideLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>
