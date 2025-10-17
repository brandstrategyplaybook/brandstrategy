<script setup lang="ts">
import gsap from 'gsap';

import { useFlipBookModal } from '~/composables/useFlipBookModal'
const { open } = useFlipBookModal()

const props = defineProps<{ slice: any }>()
const p = props.slice.primary

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
  tl.fromTo('.hero__badge', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1 });
  tl.fromTo('.hero__heading', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.0 });
  tl.fromTo('.hero__body', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 }, '-=0.5');
  tl.fromTo('.hero__button', { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.0 }, '-=0.6');
  tl.fromTo('.hero__media', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 }, '+=0.2');
})

const route = useRoute()
</script>

<template>
  <section :data-slice-variation="slice.variation" class="relative text-center" 
  :class="{'glow px-6 rounded-2xl': slice.variation == 'secondary'}"
    >
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div v-if="p.badge" class="relative inline-flex items-center hero__badge" v-show="slice.variation === 'default'">
        <AbstractLine class="absolute -left-7 -top-6 h-10 w-10  pointer-events-none animate-bounce"/>
        <p class="inline-block bg-[#E9EBFC] text-primary dark:text-white border-0 p-2.5 rounded-lg dark:bg-white/[.02] text-xs font-inter font-semibold">
          {{ p.badge }}
        </p>
      </div>

      <PrismicRichText :field="p.heading"  
        wrapper="div"
        class="mt-3 text-4xl font-poppins text-custom-black dark:text-white md:text-6xl font-bold mb-3"
        :class="{
          'text-xl! md:text-3xl!': slice.variation !== 'default',
          'hero__heading': route.name !== 'privacy-policy' && route.name !== 'terms-and-conditions'
        }" 
      />

      <PrismicRichText
        v-if="p.body"
        :field="p.body"
        wrapper="p"
        class="mt-3 text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed md:w-3/4 md:m-auto"
        :class="{
          'text-xs! md:text-base! w-full lg:w-[80%] m-auto': slice.variation !== 'default',
          'hero__body': route.name !== 'privacy-policy'
        }"
      />

      <div class="mt-6 flex flex-wrap justify-center gap-4 hero__button" v-if="p.ctas && p.ctas.length > 0">
        <template v-for="cta in slice.primary.ctas" :key="cta.key">
          <PrismicLink
            v-if="cta.variant === 'Primary'"
            :field="cta"
            class="buttonLink bg-brand-gradient ml-2 text-white transition duration-500 hover:scale-110"
          />
          <button
            v-else
            type="button"
            @click="open"
            class="text-custom-gradient cursor-pointer font-medium dark:text-custom-gradient border font-poppins border-[#F68E15] rounded-[8px] px-4 py-3 transition duration-500 hover:scale-110"
          >
            {{ cta.text || 'See an Example' }}
          </button>
        </template>
        <!-- <PrismicLink
          v-for="(cta) in slice.primary.ctas"
          :key="cta.key"
          :class="{
            'buttonLink bg-brand-gradient ml-2 text-white transition duration-500 hover:scale-110': cta.variant === 'Primary',
            'text-custom-gradient font-medium dark:text-custom-gradient border font-poppins border-[#F68E15] rounded-[8px] px-4 py-3 transition duration-500 hover:scale-110': cta.variant === 'Secondary',
          }"
          :field="cta"
        /> -->
      </div>
    </div>

    <PrismicEmbed :field="slice.primary.videolink" 
      class="hero__media rounded-2xl w-full aspect-video overflow-hidden"
      :class="{'video-secondary': slice.variation == 'secondary'}" />

    <PrismicImage :field="slice.primary.image" 
      v-if="slice.primary.image"
      class="hero__media w-full lg:w-3/4 rounded-2xl m-auto" />
  </section>
</template>

<style>
	.hero__media > iframe {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		border-radius: 2rem;
	}
  .hero__media.video-secondary > iframe {
    width: 90%!important;
  }
</style>