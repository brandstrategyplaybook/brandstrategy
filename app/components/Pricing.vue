<template>
  <div class="max-w-7xl mx-auto">
    <!-- wrapper -->
    <div class="flex flex-col md:flex-row gap-8">

    
        <!-- LEFT: Pricing card -->
        <div class="relative flex-1 pricing-bg-card rounded-2xl p-8 md:p-10">
            <!-- badge -->
            <span class="inline-flex items-center px-3 py-1 text-xs font-poppins font-medium rounded-lg bg-white/10">
              Recommended
            </span>

            <div class="h-full">
              <!-- price -->
              <div class="my-3 font-poppins">
                <div class="text-5xl md:text-5xl font-bold leading-none font-poppins text-custom-black dark:text-white">$497
                  <span class="text-sm text-custom-black dark:text-white">/One-Time</span>
                </div>
              </div>

              <!-- title + subtitle -->
              <h3 class="text-xl md:text-2xl font-poppins font-semibold">Founder License</h3>
              <p class="text-base lg:text-center dark:text-white/60 font-inter">Best for personal use.</p>

              <!-- features -->
              <ul class="mt-3 space-y-3 font-inter text-[#5F5D73] dark:text-white/60 font-medium">
                <li class="flex items-start gap-3">
                <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                </svg>
                <span>1 company playbook</span>
                </li>
                <li class="flex items-start gap-3">
                <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                </svg>
                <span>Fully editable Google Slides file (20–25 pages)</span>
                </li>
                <li class="flex items-start gap-3">
                <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                </svg>
                <span>Export as PDF or PPT anytime</span>
                </li>
                <li class="flex items-start gap-3">
                <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                </svg>
                <span>Unlimited revisions for 1 month</span>
                </li>
                <li class="flex items-start gap-3">
                <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                </svg>
                <span>Psychology-backed color recommendations</span>
                </li>
                <li class="flex items-start gap-3">
                <svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
                </svg>
                <span>14-day money-back guarantee</span>
                </li>
              </ul>

              <!-- CTA -->
              <button
                class="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold buttonLink w-full! dark:bg-brand-gradient transition">
                Get Founder License
              </button>
            </div>
        </div>

        <!-- RIGHT: Partner program -->
        <div class="flex-1 pricing-bg-card rounded-2xl p-8 md:p-10">
          <h3 class="text-2xl font-poppins font-semibold">Partner Program</h3>
          <p class="mt-3 text-[#5F5D73] dark:text-white/60 font-inter text-base leading-relaxed">
          If you work with business owners who are in the branding or rebranding phase, we’d love to connect.
          Our Partner Program rewards you for referring clients to the Brand Strategy Playbook — giving them clarity while
          adding value to your own network.
          </p>

          <button
          class="mt-6 w-full text-brand-blue dark:text-custom-gradient border font-poppins  border-brand-blue dark:border-[#F68E15] rounded-[8px] px-4 py-3">
          Learn about the partner program
          </button>
        </div>

    </div>
  </div>
</template>