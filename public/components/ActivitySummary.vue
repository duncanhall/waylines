<!-- Please remove this file from your project -->
<template>
  <span>
    {{ title }}: {{ splits.length }}km
  </span>
</template>

<script>
export default {
  name: 'ActivitySummaey',
  props: {
    title: String,
    splits: Array
  },
  data() {
    return
  }
}

</script>
