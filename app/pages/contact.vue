<script lang="ts" setup>
useSeoMeta({
  title: 'Contact Us - Brand Strategy PlayBook',
})
</script>

<template>
    <Wrapper :as="'main'" class="max-w-5xl mx-auto my-10 md:my-20">
        <section class="flex flex-col gap-4">
          <div class="w-full">
            <h1 class="text-4xl font-poppins text-custom-black dark:text-white md:text-7xl font-bold">
              Talk to the  <span class="text-custom-gradient">BSP Team</span>
            </h1>
            <p class="text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed">Whether you’re exploring BSP or already building your brand strategy, our team is here to help you get clarity, faster. Send us a note—we’ll respond within 1 business day.</p>
          </div>
          <div class="w-full md:flex-1 items-center md:justify-items-center mx-auto">
            <ContactForm/>
          </div>
        </section>
    </Wrapper>
</template> 