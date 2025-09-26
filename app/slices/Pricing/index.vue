<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PricingSlice>([
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
    :id="slice.slice_type"
  >  
    <div class="max-w-7xl mx-auto my-20">

      <div class="flex flex-col items-center gap-2 text-center">
        <h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-4xl font-bold">
            {{ slice.primary.heading }}
        </h3>
        <p class="text-[#5F5D73] dark:text-white/60 font-inter text-base md:text-lg leading-relaxed max-w-2xl">
            {{ slice.primary.text }}
        </p>
      </div> 

      <!-- wrapper -->
      <div class="flex flex-col md:flex-row gap-8 my-10">
      
          <!-- LEFT: Pricing card -->
          <div class="relative flex-1 pricing-bg-card rounded-2xl p-8 md:p-10">
              <!-- badge -->
              <span 
                v-if="slice.primary.badge" 
                class="inline-flex items-center px-3 py-1 text-xs font-poppins font-medium rounded-lg bg-white/10">
                  {{ slice.primary.badge }}
              </span>

              <div class="h-full">
                <!-- price -->
                <div class="my-3 font-poppins">
                  <div class="text-5xl md:text-5xl font-bold leading-none font-poppins text-custom-black dark:text-white" v-if="slice.primary.badge">{{ slice.primary.price }}
                    <span class="text-sm text-custom-black dark:text-white" v-if="slice.primary.badge">/One-Time</span>
                  </div>
                </div>

                <!-- title + subtitle -->
                <h3 class="text-xl mt-5 md:text-2xl font-poppins font-semibold" v-if="slice.primary.subheading">{{ slice.primary.subheading }}</h3>
                <p class="text-base dark:text-white/60 font-inter" v-if="slice.primary.subheading">Best for personal use.</p>
                
                <template v-for="item in slice.primary.first_column">
                  <ul class="mt-3 space-y-3 font-inter text-[#5F5D73] dark:text-white/60 font-medium">
                    <li class="flex items-start gap-3">
                      <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                      </svg>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                </template>

                <!-- CTA -->
                <button
                  class="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold buttonLink w-full! dark:bg-brand-gradient transition"
                  v-if="slice.primary.button">
                  <PrismicLink :field="slice.primary.button" />
                </button>
              </div>
          </div>

          <!-- RIGHT: Partner program -->
          <div class="flex-1 pricing-bg-card rounded-2xl p-8 md:p-10">
            <h3 
              class="text-2xl font-poppins font-semibold"
              v-if="slice.primary.second_column_heading">
                {{ slice.primary.second_column_heading }}
              </h3>
              <p 
                class="mt-3 text-[#5F5D73] dark:text-white/60 font-inter text-base leading-relaxed"
                v-if="slice.primary.second_column_text">
                <PrismicText :field="slice.primary.second_column_text" />
              </p>

              <button
              class="mt-6 w-full text-brand-blue dark:text-custom-gradient border font-poppins  border-brand-blue dark:border-[#F68E15] rounded-[8px] px-4 py-3"
              v-if="slice.primary.second_button">
                <PrismicLink :field="slice.primary.second_button" />
              </button>
          </div>
      </div>
      <p class="text-center text-brand-blue dark:text-custom-gradient text-xl  font-poppins font-semibold ">Apply for scholarship pricing</p>
   </div>
  </section>
</template>
