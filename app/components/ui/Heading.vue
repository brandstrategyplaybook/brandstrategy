<script lang="ts" setup>

conts props = defineProps({
    field:{
      type: Array,
      required: true
    },
    variation:{
      type: String,
      required: false,
      default: 'default'
    },
    wrapper: {
      type: String,
      required: false,
      default: 'div'
    }
    class: {
      type: String,
      required: false,
      default: ''
    }
  })
</script>

<template>
  <PrismicRichText
    :wrapper="wrapper"
    :field="field"
    class="mt-3 text-4xl font-poppins text-custom-black dark:text-white md:text-6xl font-bold"
    >
</template>