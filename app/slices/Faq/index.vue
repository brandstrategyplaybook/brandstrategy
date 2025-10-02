<script setup lang="ts">
import { getSliceComponentProps } from "@prismicio/vue"
import type { Content } from "@prismicio/client"

const props = defineProps(
  getSliceComponentProps<Content.FaqSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
)

// convenience alias
const items: AccordionItem[] = computed(() => props.slice.primary.accordion ?? [])
</script>

<template>
 <Money/>
  <section
    :data-slice-type="props.slice.slice_type"
    :data-slice-variation="props.slice.variation"
	class="my-20"
  >

  	<h2 class="font-poppins text-custom-black mb-5 text-center dark:text-white text-xl md:text-3xl font-bold">{{ slice.primary.heading }}</h2>

    <UAccordion
	  :items="items"
	  trailingIcon='i-lucide-plus'
	  class="bg-gradient-to-r from-[#DCEDFE] to-[#EEE9FA] dark:bg-[#6d6d6d0d] dark:bg-none w-full m-auto rounded-2xl pt-8 pb-5 px-5"
	  :ui="{
		item: 'bg-white/60 dark:bg-white/5 rounded-xl px-4 md:px-6 mb-4 ',
		trailingIcon: 'text-primary',
	   }">
		<template #default="{ item, index }">
			<div class="flex items-center gap-3 font-poppins">
				<span class=" text-base md:text-base py-2 text-primary">
					{{ String(index + 1).padStart(2, '0') }}
				</span>
				<h3 class="font-poppins text-base md:text-lg text-custom-black dark:text-white/60 font-medium">{{ item.title ?? item.label }}</h3>
			</div>
		</template>

		<template #body="{ item }">
			<div class="py-4 mt-2 border-t border-t-[#ebe5e5] dark:border-t-[#535252]">
				<PrismicRichText :field="item.text" wrapper="p" class="text-[#2E3754] font-inter text-sm dark:text-white"/>
			</div>
		</template>
	</UAccordion>

      
  </section>
</template>