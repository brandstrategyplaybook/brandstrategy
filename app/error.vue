<script setup lang="ts">
import type { NuxtError } from '#app'
const prismic = usePrismic()

const { data: settings } = await useAsyncData('settings', () =>
  prismic.client.getSingle('settings')
)

const props = defineProps({
  error: Object as () => NuxtError
})

useHead({
  title: 'Not Found - ' + settings.value?.data.site_title,
})
</script>

<template>
    <UApp>
    <div class="dark:glow">
        <div class="max-w-7xl mx-auto px-4">
            <AppHeader :settings="settings" />
                <div class="text-center my-30">
                    <h1 class="font-poppins text-brand-blue dark:text-white text-5xl font-bold">{{ error?.statusCode }}</h1>
                    <NuxtLink to="/" class="text-custom-black font-medium hover:text-brand-blue hover:underline transition dark:text-primary">Go back home</NuxtLink>
                </div>
            <AppFooter/>
        </div>
    </div>
  </UApp>
</template>