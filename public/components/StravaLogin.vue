<!-- Please remove this file from your project -->
<template>
  <a v-if="!isLoggedIn"
    href="https://www.strava.com/oauth/mobile/authorize?client_id=79303&response_type=code&scope=read_all,activity:read_all&redirect_uri=http://localhost:3000">Login</a>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'NuxtTutorial',
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
  }
}
</script>
