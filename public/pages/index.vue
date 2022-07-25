<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <StravaLogin />
      <Fert />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StravaLogin from '~/components/StravaLogin.vue'
import Fert from '../components/Fert.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { StravaLogin, Fert }
})
</script>
