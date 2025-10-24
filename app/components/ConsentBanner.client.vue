<template>
    <div
      v-if="show"
      class="fixed bottom-0 font-poppins left-0 w-full z-50 bg-gray-900 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 shadow-lg"
    >
      <p class="text-sm">
        We use cookies for analytics to improve your experience. By accepting, you agree to our cookie policy.
      </p>
      <div class="flex gap-3 lg:justify-end">
        <button
          class="buttonLink cursor-pointer bg-brand-gradient text-white!  px-4 py-2 rounded hover:bg-gray-200 transition"
          @click="grantConsent"
        >
          Accept
        </button>
        <button
          class="border px-4 buttonLink cursor-pointer py-2 rounded text-custom-gradient  border-[#F68E15] hover:bg-gray-800 transition"
          @click="declineConsent"
        >
          Decline
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const { initialize, gtag } = useGtag()
  const LS_KEY = 'consent.analytics'
  const show = ref(true)
  
  onMounted(() => {
    const saved = localStorage.getItem(LS_KEY)
    if (saved === 'granted') {
      enableAnalytics()
      show.value = false
    } else if (saved === 'denied') {
      show.value = false
    }
  })
  
  function enableAnalytics() {
    initialize()
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
    // Optional: if Enhanced Measurement is OFF:
    // gtag('event', 'page_view')
  }
  
  function grantConsent() {
    localStorage.setItem(LS_KEY, 'granted')
    enableAnalytics()
    show.value = false
  }
  
  function declineConsent() {
    localStorage.setItem(LS_KEY, 'denied')
    show.value = false
  }
  </script>  