<template>
  <q-page class="flex">
    <div class="q-pa-md">
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
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import WhatSayYou from 'src/components/WhatSayYou.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { WhatSayYou },
})
</script>
