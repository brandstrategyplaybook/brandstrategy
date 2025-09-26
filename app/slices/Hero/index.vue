<script setup lang="ts">
import FullHero from './FullHero.vue'

defineProps({
  slice: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <FullHero :slice="slice" />
</template>