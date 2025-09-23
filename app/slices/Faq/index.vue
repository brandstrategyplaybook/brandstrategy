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
const rows = computed(() => props.slice.primary.accordion ?? [])
</script>

<template>
  <section
    :data-slice-type="props.slice.slice_type"
    :data-slice-variation="props.slice.variation"
    class="py-10"
  >
    <h2 class="mb-6 text-2xl font-semibold">{{ props.slice.primary.heading }}</h2>

    <!-- Use items as slot to keep RichText -->
    <UAccordion multiple>
      <UAccordionItem
        v-for="(item, i) in rows"
        :key="i"
        class="border-b border-white/10 py-3"
      >
        <!-- Custom label with left index + title -->
        <template #label>
          <div class="flex items-center gap-3">
            <span class="w-8 shrink-0 text-sm font-medium opacity-60">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="text-base font-medium">
              {{ item.title }}
            </span>
          </div>
        </template>

        <!-- Fixed trailing icon (plus). If you want plus/minus toggle, see note below -->
        <template #trailing>
          <UIcon name="i-lucide-plus" class="size-5 opacity-70" />
        </template>

        <!-- Answer -->
        <div class="pt-3 pl-11"> <!-- left padding lines up with index -->
          <PrismicRichText :field="item.text" />
        </div>
      </UAccordionItem>
    </UAccordion>
  </section>
</template>