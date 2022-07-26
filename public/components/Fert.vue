<!-- Please remove this file from your project -->
<template>
  <div>
    <li v-for="a in activities" :key="a.id">
      <ActivitySummary :splits="a.splits_metric" :title="a.name" />
    </li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActivitySummary from './ActivitySummary.vue';

export default {
    name: "Fert",
    mounted: async function () {

    },
    computed: {
      ...mapGetters({
        activities: 'activities',
      }),
    },
    components: { ActivitySummary }
}

</script>
