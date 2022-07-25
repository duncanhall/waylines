<!-- Please remove this file from your project -->
<template>
  <div>
    <li v-for="a in activities" :key="a.id">
      <ActivitySummary :splits="a.splits_metric" :title="a.name" />
    </li>
  </div>
</template>

<script>

import ActivitySummary from './ActivitySummary.vue';


export default {
    name: "Fert",
    mounted: async function () {

    },
    data() {
        return {
            activities: []
        };
    },
    methods: {},
    computed: {},
    components: { ActivitySummary }
}

</script>
