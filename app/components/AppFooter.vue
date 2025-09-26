<template>
  <footer class="rounded-2xl mt-20 mb-10 p-4 md:py-6 md:px-12  bg-figma-soft dark:bg-[#1828591f] dark:footer-flow ring-1 ring-white/15">
    <div class="max-w-7xl mx-auto py-10">
      <!-- 3 columns -->
      <div class="flex flex-col md:flex-row gap-5 justify-between">
        <!-- Brand / blurb -->
        <div class="space-y-2 w-full md:w-1/2">
          <NuxtLink to="/" class="z-50">
              <Logo/>
          </NuxtLink>
          <p class="text-base text-[#2E3754] dark:text-white/70 mt-5 font-inter">
            Turn scattered brand ideas into a crisp, investor-ready playbook in under an hour.
          </p>
        </div>

        <!-- Legal -->
        <nav class="space-y-2">
          <h3 class="text-lg font-poppins font-semibold text-custom-black dark:text-white">Legal</h3>
          <ul class="space-y-1">
            <li><NuxtLink to="/privacy-policy" class="text-base text-[#2E3754] dark:text-white/70 mt-5 font-inter hover:text-brand-blue transition-colors duration-300 dark:hover:text-primary">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-base text-[#2E3754] dark:text-white/70 mt-5 font-inter hover:text-brand-blue transition-colors duration-300 dark:hover:text-primary">Terms of Service</NuxtLink></li>
          </ul>
        </nav>

        <!-- Support -->
        <nav class="space-y-2">
          <h3 class="text-lg font-poppins font-semibold text-custom-black dark:text-white">Support</h3>
          <ul class="space-y-1">
            <li><NuxtLink to="/contact" class="text-base text-[#2E3754] dark:text-white/70 mt-5 font-inter hover:text-brand-blue transition-colors duration-300 dark:hover:text-primary">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/partners" class="text-base text-[#2E3754] dark:text-white/70 mt-5 font-inter hover:text-brand-blue transition-colors duration-300 dark:hover:text-primary">Agency Partners</NuxtLink></li>
          </ul>
        </nav>
      </div>

      <!-- copyright row -->
      <div class="mt-10 pt-6 border-t border-[#0B0515] dark:border-[#FFFFFF1C]">
        <p class="text-xs text-[#070A17] dark:text-white/70 text-[15px] font-inter">
          © {{ new Date().getFullYear() }} Stralegrow LLC. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
  html.dark .router-link-active {
    color: #F68E15!important;
    font-weight: 500;
  }
  html.light .router-link-active {
    color: #2781F6;
    font-weight: 500;;
  }
</style>