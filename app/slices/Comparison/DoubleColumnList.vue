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

  const container = root.value
  if (!container) return

  gsap.fromTo(container.querySelector('.secondary__header'),
    { opacity: 0, y: 16 },
    {
      opacity: 1, y: 0, duration: 0.9,
      scrollTrigger: { trigger: container, start: 'top 85%' }
    }
  )

  const cols = gsap.utils.toArray(container.querySelectorAll('.secondary__col'))
  if (cols.length) {
    gsap.fromTo(cols,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15,
        scrollTrigger: { trigger: container, start: 'top 80%' }
      }
    )
  }
})
</script>


<!-- :class="slice.variation === 'reversed' ? 'lg:order-1 lg:translate-x-[15%]' : 'lg:-order-1 lg:translate-x-[-15%]' -->

<template>
  <section
    ref="root"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="comparison-secondary"
  >
    <div class="max-w-7xl rounded-2xl my-10 mb-20 py-6 md:px-12 bg-white border border-[#F1F0F3] dark:border-0 dark:bg-[#1828591f] dark:footer-flow comparison__title">
      <!-- Two columns variant -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 hero__media">
        <div class="comparison__card flex-1 light-bg-card-comparison dark:bg-card-comparison rounded-2xl border border-white/10 p-6">
          <ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose list-disc px-6">
            <li v-for="(item, i) in slice.primary.left_list" :key="i" class="list-item gap-3">
              <span>{{ item.item_name }}</span>
            </li>
          </ul>
        </div>
        <div class="comparison__card flex-1 light-bg-card-comparison dark:bg-card-comparison rounded-2xl border border-white/10 p-6">
          <ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose list-disc px-6">
            <li v-for="(item, i) in slice.primary.right_list" :key="i" class="list-item gap-3">
              <span>{{ item.item_name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>