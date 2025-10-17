<script lang="ts" setup>
import { header } from "#build/ui";
import type { Content } from "@prismicio/client";
import { ref, onMounted, onBeforeUnmount } from "vue";

defineProps<{ settings?: Content.SettingsDocument }>()

const headerEl = ref<HTMLElement | null>(null);
const scrolled = ref(false);

function handleScroll(){
    if (!headerEl.value) return;
    scrolled.value = window.scrollY > headerEl.value.offsetHeight;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    ref="headerEl"
    class="p-4 md:px-6 md:pb-2 md:pt-4 border-b border-[#DFE4FE] 
    bg-white dark:bg-transparent
    dark:border-[#FFFFFF1C] sticky top-0 z-30 transition-colors duration-500"
        :class="scrolled
        ? 'bg-white dark:!bg-[#0f172b]'
        : 'bg-white dark:bg-transparent'">
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
                class="inline-flex min-h-11 scroll-smooth items-center font-poppins 3 text-primary
                dark:text-white font-medium transition duration-300 hover:scale-110"
                :class="{
                    'buttonLink bg-brand-gradient text-white! ml-2 rounded-md transition duration-500 hover:scale-110': link.variant === 'Button',
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