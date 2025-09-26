<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = await useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID('page', route.params.uid as string)
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <!-- <PrismicRichText :field="slice.primary.heading" />
  <PrismicRichText :field="slice.primary.body" /> -->
  <h1>error</h1>
  <section class="my-10 px-4 md:px-6" :class="['page', page?.uid ? `page--${page.uid}` : '']">
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </section>
</template>