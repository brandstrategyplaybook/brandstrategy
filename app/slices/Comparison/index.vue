<script setup lang="ts">
import type { Content } from "@prismicio/client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ComparisonSlice>([
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
  	<div class="rounded-2xl mt-20 mb-10 p-4 md:py-12 md:px-12 bg-white border border-[#F1F0F3] dark:border-0 dark:bg-[#1828591f] dark:footer-flow comparison__title">
		<!-- Heading + CTA -->
		<div class="flex flex-col items-center gap-4 text-center">
			<h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">{{ slice.primary.heading }}</h3>
			<button class="text-brand-blue dark:text-custom-gradient border font-poppins  border-brand-blue dark:border-[#F68E15] rounded-[8px] px-4 py-3"><PrismicLink :field="slice.primary.cta" /></button>
		</div>

		<!-- Cards -->
		<div class="mt-10 flex flex-col gap-6 md:flex-row comparison__card">
			<!-- Before -->
			<div class="flex-1 light-bg-card-comparison dark:bg-card-comparison rounded-2xl border border-white/10 p-6">
				<h3 class="mb-4 font-poppins text-sm md:text-xl font-bold  text-custom-black dark:text-white">
					Before: Brand Chaos
				</h3>
				<ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose" v-for="item in slice.primary.before">
					<li class="flex items-center gap-3">
						<UIcon name="i-lucide-x" class="size-5 text-red-500" />
						<span>{{item.name_list}}</span>
					</li>
				</ul>
			</div>

			<!-- After -->
			<div class="flex-1 rounded-2xl border border-white/10 variation-bg-card-comparison p-6 dark:bg-card-comparison">
				<h3 class="mb-4 font-poppins text-sm md:text-xl font-bold  text-custom-black dark:text-white">
					After: Brand Chaos
				</h3>
				<ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose" v-for="item in slice.primary.after">
					<!-- item -->
					<li class="flex items-center gap-3">
						<UIcon name="i-lucide-check" class="size-5 text-green-500" />
						<span>{{  item.name_list }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
  </section>
</template>
