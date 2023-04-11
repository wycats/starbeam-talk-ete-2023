<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <div :class="[`slidev-layout`, $props.name]">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
