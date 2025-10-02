<script setup lang="ts">
import { components } from '~/slices'
const { client } = usePrismic()

const { data: policy, pending, error } = await useAsyncData('terms-and-conditions', () =>
  client.getSingle('terms_and_conditions')   // <-- replace with your exact API ID if different
)
const title = computed(() => policy.value?.data?.meta_title || 'Terms and Conditions')
const description = computed(() => policy.value?.data?.meta_description || 'Terms and Conditions')
useSeoMeta({ title, description })
</script>

<template>
  <main class="policy-page max-w-6xl m-auto">
    <pre v-if="error">{{ error.message }}</pre>
    <div v-else-if="pending">Loading…</div>
    <SliceZone
      v-else
      :slices="policy?.data?.slices ?? policy?.data?.body ?? []"
      :components="components"
    />
  </main>
</template>

<style scoped>
/* If your Rich Text slice type is `long_paragraph` */
.policy-page :deep([data-slice-type="long_paragraph"] h2) {
  font-size: 56px;
  line-height: 1.4;
  margin: 1rem 0 .5rem;
  font-weight: 600;
}
.policy-page :deep([data-slice-type="long_paragraph"] h3) {
  font-weight: 500;
}
.policy-page :deep([data-slice-type="long_paragraph"] p),
.policy-page :deep([data-slice-type="long_paragraph"] h3),
.policy-page :deep([data-slice-type="long_paragraph"] li) {
  font-family: Poppins, sans-serif;
  font-size: 18px;
}
.policy-page :deep([data-slice-type="long_paragraph"] ul) {
  font-family: Poppins, sans-serif;
  font-size: 18px;
  margin-bottom: 20px;;
}
@media screen and (max-width: 768px) {
  .policy-page :deep([data-slice-type="long_paragraph"] p),
  .policy-page :deep([data-slice-type="long_paragraph"] h3),
  .policy-page :deep([data-slice-type="long_paragraph"] li) {
    font-size: 16px;
  }
  
}
</style>