<template>
  <q-page class="flex">
    <div class="q-pa-md">
      <div class="row headroom">
        <div class="col">
          <auth-widget />
        </div>
      </div>
      <div class="row headroom">
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
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import WhatSayYou from 'src/components/WhatSayYou.vue'
import AuthWidget from 'src/components/AuthWidget.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { WhatSayYou, AuthWidget },
})
</script>

<style lang="scss" scoped>
.headroom {
  margin-top: 1em;
}
</style>
