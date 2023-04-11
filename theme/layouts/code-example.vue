<!--
  Usage:
```md
---
layout: comparison
---
This spans both
::a::
# Left
This shows on the left
::b::
# Right
This shows on the right
```
-->

<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
  },
});
</script>

<template>
  <div class="slidev-layout code-example w-full h-full">
    <div class="main col-span-2">
      <slot />
    </div>
    <div class="cols grid grid-cols-2 gap-2">
      <div class="col col-left" :class="props.class">
        <slot name="a" />
      </div>
      <div class="col col-right" :class="props.class">
        <slot name="b" />
      </div>
    </div>
    <div class="w-full footer mt-2" v-if="$slots['footer']">
      <div class="col-span-2"><slot name="footer" /></div>
    </div>
  </div>
</template>

<style scoped>
div.code-example {
  --slidev-code-font-size: 0.7rem;
  --slidev-code-line-height: calc(0.7rem * 1.5);
}

.col :deep(.slidev-code-wrapper),
.col :deep(.shiki-container) {
  display: contents;
}
.col :deep(pre.slidev-code) {
  width: auto;
}
</style>
