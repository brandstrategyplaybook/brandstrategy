<script setup lang="ts">
import type { Content } from "@prismicio/client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.StepsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo('.comparison__title',
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.comparison__title',
        start: 'top 80%',  // starts when the title is near the viewport
        toggleActions: 'play none none reverse'
      }
    }
  )

  gsap.fromTo('.comparison__card',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.comparison__card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  )
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
		<div class="flex flex-col items-center gap-2 text-center mt-20 comparison__title">
			<h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">{{ slice.primary.heading }}</h3>
			<p class="text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed">
				{{ slice.primary.text }}
			</p>
		</div>

		<div class="w-full p-4 rounded-2xl mt-5 mb-20 md:py-12 md:px-12 bg-white dark:bg-[#1828591f] dark:footer-flow comparison__card">
			<div class="mx-auto max-w-6xl">
				<div class="flex flex-col flex-wrap gap-5 xl:gap-0 xl:justify-between md:flex-row">
					<article class="relative w-full md:w-[48%] xl:w-[24%] text-center rounded-2xl border border-white/10 light-bg-card-steps p-6" v-for="item in slice.primary.tiles">
						<!-- Icon -->
						<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white dark:bg-white/10">
							<UIcon :name="item.svg " class="size-10" />
						</div>

						<!-- Step -->
						<p class="mb-1 text-sm font-poppins tracking-wide font-bold text-custom-gradient">{{ item.step_order }}</p>

						<!-- Title -->
						<h3 class="mb-2 text-base font-poppins font-semibold text-custom-black dark:text-white">{{ item.heading }}</h3>

						<!-- Subtitle -->
						<p class="text-xs font-inter text-[#2E3754] dark:text-white/70">{{ item.text }}</p>
					</article>
				</div>
			</div>
		</div>
  </section>
</template>
