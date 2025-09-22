<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"
import type { Content } from "@prismicio/client"
import { computed, defineAsyncComponent } from "vue"

const props = defineProps(
  getSliceComponentProps<Content.HeroSlice>(["slice","index","slices","context"])
)
const Comp = computed(() => {
  switch (props.slice.variation) {
    case "simpleHero":
      return defineAsyncComponent(() => import("./SimpleHero.vue"))
    default:
      return defineAsyncComponent(() => import("./FullHero.vue"))
  }
})
</script>

<template>
  <component :is="Comp" :slice="slice" />
</template>