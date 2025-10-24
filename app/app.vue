<script setup lang="ts">

import FlipBookModal from '~/components/FlipBookModal.vue'
import { useFlipBookModal } from '~/composables/useFlipBookModal'
const { isOpen } = useFlipBookModal()

const prismic = usePrismic()

const { data: settings } = await useAsyncData('settings', () =>
  prismic.client.getSingle('settings')
)

useSeoMeta({
  title: settings.value?.data.site_title,
  ogTitle: settings.value?.data.site_title,
  description: settings.value?.data.meta_description,
  ogDescription: settings.value?.data.meta_description,
  ogImage: computed(() => prismic.asImageSrc(settings.value?.data.meta_image)),
})
</script>

<template>
  <UApp>
    <div class="dark:glow">
      <div class="max-w-7xl mx-auto">
        <AppHeader :settings="settings" />

        <div class="px-4">
          <ConsentBanner />
          <NuxtPage />
          <FlipBookModal v-if="isOpen" />
          <AppFooter />
        </div>
      </div>
    </div>
  </UApp>
</template>