<!-- Please remove this file from your project -->
<template>
  <div>
      {{ title }}: {{ splits.length }}km
  </div>
</template>

<script>
export default {
  name: 'ActivitySummaey',
  props: {
    title: String,
    splits: Array
  },
}

</script>
