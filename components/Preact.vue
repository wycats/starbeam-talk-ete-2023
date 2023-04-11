<script lang="ts" setup>
import Star from "./Star.vue";
defineProps<{
  at?: number | undefined;
}>();
</script>

<template>
  <div class="note stick" v-click="$props.at">
    <Star /> As always, Preact doesn't need <code>useReactive</code>.
  </div>
</template>

<style>
.note {
  @apply text-sm;
}
</style>
