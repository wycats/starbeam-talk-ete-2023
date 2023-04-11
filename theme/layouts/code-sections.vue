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
  <div class="slidev-layout comparison w-full h-full">
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
div.comparison {
  --slidev-code-font-size: 0.7rem;
  --slidev-code-line-height: calc(0.7rem * 1.5);

  display: grid;
  grid-template:
    "main" max-content
    "." 2rem
    "cols" 1fr
    "footer" max-content /
    auto;
}

div.comparison > .main {
  grid-area: main;
}

div.comparison > .cols {
  grid-area: cols;
}

div.comparison > .footer {
  grid-area: footer;
}

.main :deep(h1) {
  margin-block-end: 0;
}

.main :deep(h2) {
  color: var(--slidev-theme-accents-teal);
}

.cols {
  display: grid;
  align-items: stretch;
  grid-template:
    "a-head b-head" max-content
    "a b" 1fr /
    1fr 1fr;
}

.col,
:deep(pre.shiki-container),
:deep(.slidev-code-wrapper) {
  display: contents;
}

.col :deep(h2) {
  margin-block-end: 0;
  font-size: 1rem !important;
  line-height: 1rem !important;
}

.col-left > :deep(h2) {
  grid-area: a-head;
}

.col-left :deep(pre.slidev-code) {
  grid-area: a;
}

.col-right > :deep(h2) {
  grid-area: b-head;
}

.col-right :deep(pre.slidev-code) {
  grid-area: b;
}
</style>
