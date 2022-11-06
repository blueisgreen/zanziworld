<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      min-height="5rem"
      placeholder="Type whatever you like..."
    />

    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  initialMessage: { type: String, default: 'wumpus' },
})
const emit = defineEmits(['post'])
const editor = ref('blargy pants')
</script>

<style></style>
