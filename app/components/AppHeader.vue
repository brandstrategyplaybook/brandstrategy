<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{ settings?: Content.SettingsDocument }>()

const value = ref(true)
</script>

<template>
  <header class="p-4 md:px-6 md:pb-2 md:pt-4 border-b border-[#DFE4FE]  dark:border-[#FFFFFF1C]">
    <nav
      class="mx-auto flex max-w-7xl justify-between py-2 md:items-center font-medium text-white"
      aria-label="Main"
    >
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="z-50">
                <Logo/>
                <h1 class="opacity-0 hidden">Brand Strategy Playbook</h1>
                <span class="sr-only">{{ settings?.data.site_title }} BSP </span>
            </NuxtLink>
        </div>

        <!-- Nav -->
        <ul class="gap-4 flex items-center">
            <li v-for="link in settings?.data.navigation" :key="link.key">
            <PrismicLink
                :field="link"
                class="inline-flex min-h-11 items-center font-poppins text-brand-blue hover:text-black dark:hover:text-primary transition-colors duration-300 dark:text-white font-medium"
                :class="{
                    'buttonLink dark:bg-brand-gradient ml-2': link.variant === 'Button',
                }"
            />
            </li>
            <li>
                <UColorModeButton/>
            </li>
        </ul>
    </nav>
  </header>
</template>