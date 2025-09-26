<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.LongParagraphSlice>([
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
	<h2 v-if="slice.primary.title">{{ slice.primary.title }}</h2>
  	<div class="rt-slice">
		<PrismicRichText :field="slice.primary.text" />
	</div>
  </section>
</template>

<style scoped>
/* Only the page with UID = 'privacy-policy' */
.page--privacy-policy ::v-deep(.rt-slice p) {
  font-size: 18px;
  line-height: 1.7;
}
.page--privacy-policy ::v-deep(.rt-slice h2) {
  margin-top: 1.7rem;
  font-size: 50px !important; 
  color: red !important;
}
</style>