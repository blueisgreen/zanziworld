<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-img
        alt="Zanzibar, Nuclear Hero"
        src="~assets/Zanzibar.svg"
        width="200px"
        height="200px"
      />
    </div>
    <div>
      <what-say-you />
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
