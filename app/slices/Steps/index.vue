<script setup lang="ts">
import type { Content } from "@prismicio/client";

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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
		<div class="flex flex-col items-center gap-2 text-center mt-20">
			<h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">{{ slice.primary.heading }}</h3>
			<p class="text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed">
				{{ slice.primary.text }}
			</p>
		</div>

		<div class="w-full p-4 rounded-2xl mt-5 mb-20 md:py-12 md:px-12 bg-white dark:bg-[#1828591f] dark:footer-flow">
			<div class="mx-auto max-w-6xl">
				<div class="flex flex-col flex-wrap gap-5 xl:gap-0 xl:justify-between md:flex-row">
					<article class="relative w-full md:w-[48%] xl:w-[24%] text-center rounded-2xl border border-white/10 light-bg-card-steps p-6" v-for="item in slice.primary.tiles">
						<!-- Icon -->
						<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white dark:bg-white/10">
							<UIcon :name="item.svg " class="size-10" />
						</div>

						<!-- Step -->
						<p class="mb-1 text-sm font-poppins font-medium tracking-wide text-brand-blue dark:text-[#F6B94C]">{{ item.step_order }}</p>

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
