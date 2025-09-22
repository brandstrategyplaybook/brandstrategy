<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TestimonialsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Use repeatable items if present; otherwise fall back to a group field in primary.
// const items = slice.items?.length ? slice.items : (slice.primary?.testimonial || [])

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
	<h3 class="font-poppins text-custom-black text-center mb-8 dark:text-white text-xl md:text-3xl font-bold">{{ slice.primary.heading }}</h3>

	<UCarousel
		:items="slice.primary?.testimonial || []"
		arrows
		dots
		v-slot="{ item, index }"
		:ui="{ item: 'w-full md:basis-1/2' }"
		>
		<article :key="index" class="flex flex-col overflow-hidden rounded-2xl light-testimonial  dark:dark-testimonial text-white md:flex-row md:flex-wrap gap-8">
			<div class="flex flex-col md:flex-row w-full flex-1 md:basis-[48%] justify-between rounded-xl overflow-hidden shadow-lg">
				<div class="relative w-full shrink-0 md:w-1/3">
					<div class="h-full w-full bg-white/5">
						<PrismicImage
							v-if="item.image"
							:field="item.image"
							class="max-h-[300px] md:h-full md:max-h-full w-full object-cover md:rounded-r-none"
						/>
					</div>
				</div>
				<div class="flex w-full flex-col justify-between">
					<!-- Quote body -->
					<div class="relative p-6 sm:p-8">
						<Quote/>
						<!-- If your quote is Rich Text -->
						<PrismicRichText
							v-if="item.text"
							:field="item.text"
							wrapper="p"
							class="text-[#3C3D54] dark:text-[#A1A4B5] font-inter text-sm mt-3"
						/>
					</div>

					<!-- Author -->
					<div class="p-6 sm:p-8">
						<!-- If name/company are key_text -->
						<p v-if="item.name" class="font-semibold text-custom-black dark:text-white">
							{{ item.name }}
						</p>
						<p v-if="item.role || item.company" class="text-sm opacity-70 text-[#3C3D54] dark:text-[#A1A4B5]">
							{{ item.role }}<span v-if="item.role && item.company">, </span>{{ item.company }}
						</p>
					</div>
       			</div>
			</div>
		</article>
	</UCarousel>

  </section>
</template>
