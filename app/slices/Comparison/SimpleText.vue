<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PrismicLink, getSliceComponentProps } from '@prismicio/vue'
import type { Content } from '@prismicio/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const { slice } = defineProps(
  getSliceComponentProps<Content.ComparisonSlice>([
    'slice','index','slices','context'
  ])
)

const root = ref<HTMLElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  gsap.registerPlugin(ScrollTrigger)

  // Title
  const titleEl = root.value?.querySelector('.comparison__title')
  if (titleEl) {
    gsap.fromTo(titleEl,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: titleEl, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    )
  }

  // Cards
  const cards = gsap.utils.toArray(root.value?.querySelectorAll('.comparison__card') ?? [])
  if (cards.length) {
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: cards[0] as Element, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }
})
</script>

<template>
  <section
    ref="root"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="comparison"
  >
    <div class="rounded-2xl mt-20 mb-10 p-4 md:py-12 md:px-12 bg-white border border-[#F1F0F3] dark:border-0 dark:bg-[#1828591f] dark:footer-flow comparison__title">
      <!-- Cards -->
      <div class="flex flex-col gap-6 md:flex-row">
        <!-- Before -->
        <div class="comparison__card flex-1 light-bg-card-comparison dark:bg-card-comparison rounded-2xl border border-white/10 p-6">
          <h3 class="mb-4 font-poppins text-sm md:text-xl font-bold text-custom-black dark:text-white">
            {{ slice.primary.first_column_heading || 'Before: Brand Chaos' }}
          </h3>
          <ul class="flex flex-col gap-3 text-base text-[#5F5D73] dark:text-white/60 font-inter font-medium leading-loose list-disc list-inside">
            <li v-for="(item, i) in slice.primary.before" :key="i" class="list-item items-center gap-3">
              <span>{{ item.name_list }}</span>
            </li>
          </ul>
        </div>

        <!-- After -->
        <div class="comparison__card flex-1 rounded-2xl border border-white/10 variation-bg-card-comparison p-6 dark:bg-card-comparison">
          <h3 class="mb-4 font-poppins text-sm md:text-xl font-bold text-custom-black dark:text-white">
            {{ slice.primary.second_column_heading || 'After: Brand Clarity' }}
          </h3>
          <PrismicRichText :field="slice.primary.text" wrapper="div" class="font-inter text-base text-[#2E3754] dark:text-white/60" />
        </div>
      </div>
    </div>
  </section>
</template>