<script setup lang="ts">
const props = defineProps<{ slice: any }>()
const p = props.slice.primary
// Prefer the repeat zone for CTAs
// const ctas = props.slice.items ?? []  // each item: { label, link, style }
</script>

<template>
  <section :data-slice-variation="slice.variation" class="relative text-center">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="relative inline-flex items-center">
        <AbstractLine class="absolute -left-7 -top-6 h-10 w-10 text-blue-500 pointer-events-none"/>
        <p v-if="p.badge" class="inline-block bg-[#E9EBFC] text-brand-blue dark:text-white border-0 p-2.5 rounded-lg dark:bg-white/[.02] text-xs font-inter font-semibold">
          {{ p.badge }}
        </p>
      </div>

      <PrismicRichText :field="p.heading"  wrapper="div" class="mt-3 text-4xl font-poppins text-custom-black dark:text-white md:text-6xl font-bold" />
      
      <PrismicRichText
        v-if="p.body"
        :field="p.body"
        wrapper="p"
        class="mt-3 text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed"
      />

      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <button class="buttonLink dark:bg-brand-gradient ml-2">Build My Playbook</button>
        <button class="text-brand-blue dark:text-custom-gradient border font-poppins  border-brand-blue dark:border-[#F68E15] rounded-[8px] px-4 py-3">See an Example </button>
        <!-- <PrismicLink
          v-for="(item, i) in ctas"
          :key="i"
          :field="item.link"
          :class="item.style === 'primary' ? 'btn-primary' : 'btn-outline'"
        >
          {{ item.label }}
        </PrismicLink> -->
      </div>
    </div>
  </section>
</template>