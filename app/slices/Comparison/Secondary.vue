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

<template>
  <section
    ref="root"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="comparison-secondary"
  >
    <div class="max-w-7xl rounded-2xl mt-20 mb-10 p-6 md:p-12 bg-white dark:bg-transparent">
      <div class="flex flex-col items-center gap-4 text-center">
        <h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">
            {{ slice.primary.heading }}
        </h3>
      </div> 

      <!-- Two columns variant -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
           <div class="flex items-center leading-loose gap-3">
                <UIcon name="i-lucide-check" class="size-5 text-[#15D115]" />
                <h3 class="font-poppins text-sm md:text-lg font-semibold text-custom-black dark:text-white">
                    {{ slice.primary.first_column_heading || 'Before' }}
                </h3>
           </div> 
          <ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose mt-5 font-medium list-disc list-inside">
            <li v-for="(item, i) in slice.primary.before" :key="i" class="list-item dark:footer-flow items-center gap-3 rounded-2xl border border-white/10 light-bg-card-steps py-2 px-6">
              <span>{{ item.name_list }}</span>
            </li>
          </ul>
        </div>

        <div>
            <div class="flex items-center leading-loose gap-3">
                <UIcon name="i-lucide-x" class="size-5 text-[#FF1317]" />
                <h3 class="font-poppins text-sm md:text-lg font-semibold text-custom-black dark:text-white">
                    {{ slice.primary.second_column_heading || 'Before' }}
                </h3>
           </div>
          <ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose mt-5 font-medium list-disc list-inside">
            <li v-for="(item, i) in slice.primary.after" :key="i" class="list-item dark:footer-flow items-center gap-3 rounded-2xl border border-white/10 light-bg-card-steps py-2 px-6">
              <span>{{ item.name_list }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>