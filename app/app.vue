<script setup lang="ts">
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
        <div class="max-w-7xl mx-auto px-4">
            <AppHeader :settings="settings" />
            <NuxtPage />
            <Pricing />
            <Money/>
            <AppFooter/>
        </div>
    </div>
  </UApp>
</template>