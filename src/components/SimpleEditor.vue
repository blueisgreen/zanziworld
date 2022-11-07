<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      paragraph="p"
      min-height="5rem"
      placeholder="Type whatever you like..."
    />
    <q-btn label="Post" @click="handlePost" />
    <q-btn label="Click" @click="handleClick" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SimpleEditor',
  props: {
    initialMessage: {
      type: String,
      default: '',
    },
  },
  emits: ['post', 'click-it'],
  methods: {
    handlePost() {
      this.$emit('post', this.editor)
      this.editor = ''
    },
    handleClick() {
      this.$emit('click-it')
    }
  },
  data() {
    return {
      editor: ref(this.initialMessage),
    }
  },
}
</script>

<style></style>
