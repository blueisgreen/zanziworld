<template>
  <div>
    <h4>
      <slot name="title" />
    </h4>
    <div class="row">
      <div class="col gap">
        <slot name="image"></slot>
      </div>
      <div class="col gap lesson-text">
        <q-scroll-area style="height: 600px">
          <slot></slot>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gap {
  padding: 1em;
}
.lesson-text {
  font-size: large;
}
</style>
