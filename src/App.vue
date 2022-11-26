<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default defineComponent({
  name: 'App'
})
</script>
