<template>
  <q-page class="flex">
    <div class="q-pa-md">
      <div class="col">
        <div>
          <q-img
            alt="Zanzibar, Nuclear Hero"
            src="~assets/Zanzibar.svg"
            width="200px"
            height="200px"
          />
          <div>
            I am Zanzibar. I can teach you about nuclear power. What would you
            like to know?
          </div>
        </div>
        <div>
          <what-say-you />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import WhatSayYou from 'src/components/WhatSayYou.vue'
</script>

<style lang="scss" scoped>
.headroom {
  margin-top: 1em;
}
</style>
