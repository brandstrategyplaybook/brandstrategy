<script lang="ts" setup>
  const props = defineProps({
    field:{
      type: Object,
      required: true
    },
    url:{
      type: String,
      required: false,
      default: '#'
    },
    variation:{
      type: String,
      required: false,
      default: 'default'
    },
    key: {
      type: String,
      required: false,
      default: ''
    },
    class: {
      type: String,
      required: false,
      default: ''
    }
  })
</script>
<template>
  <div>
    <a :url="props.url" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <slot/>
    </a>
  </div>
</template>