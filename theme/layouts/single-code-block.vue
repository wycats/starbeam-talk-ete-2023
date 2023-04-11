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
  <div class="slidev-layout single-code-block w-full h-full">
    <slot />
  </div>
</template>

<style scoped>
div.single-code-block {
  --slidev-code-font-size: 0.8rem;
  --slidev-code-line-height: calc(0.8rem * 1.5);
}
</style>
