<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

// preload async components once
const SimpleTextComp = defineAsyncComponent(() => import('./SimpleText.vue'))
const SecondaryComp  = defineAsyncComponent(() => import('./Secondary.vue'))
const ListImageComp  = defineAsyncComponent(() => import('./ListImageComp.vue'))
const DefaultComp    = defineAsyncComponent(() => import('./Default.vue')) // note the file name case

const props = defineProps<{ slice: { variation?: string } }>()

const Comp = computed(() => {
  switch (props.slice.variation) {
    case 'simpleText':
      return SimpleTextComp
    case 'secondary':
      return SecondaryComp
    case 'listAndImage':
      return ListImageComp
    default:
      return DefaultComp
  }
})
</script>

<template>
  <component :is="Comp" v-bind="props" />
</template>