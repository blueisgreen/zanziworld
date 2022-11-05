<template>
  <q-page class="flex flex-center">
    <div>
      <img
        alt="Zanzibar"
        src="~assets/Zanzibar.svg"
        style="width: 200px; height: 200px"
      />
    </div>
    <what-say-you />
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
