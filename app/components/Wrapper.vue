<script lang="ts" setup>
defineProps<{ as?: string }>()
</script>

<template>
  <Component :is="as || 'div'">
      <slot />
  </Component>
</template>