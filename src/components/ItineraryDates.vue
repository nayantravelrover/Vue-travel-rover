<template>
<div class="q-pa-md" v-if="this.$store.state.itinerary_preview.start_dates.length>0">
  <div class="text-bold" style="font-size: large">Tour Departures</div><br>

  <q-table
    bordered
    flat
    hide-pagination
      :rows="groupByMonth"
      :columns="columns"
      row-key="name"
    />
</div>
</template>

<script>
import _ from "lodash";

export default {
  name: "ItineraryDates",
  methods:{
    conv_to_month_dict(){

    }
  },
  data(){
    return {
      columns: [
        { name: 'Month', align: 'center', label: 'Month', field: 'month', sortable: true },
      { name: 'Days', label: 'Days', align: 'center', field: 'days', sortable: true },
      ]
    }
  },
  computed:{
    groupByMonth: function(){
      var result = []
      const _ = require('lodash');
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var month_dates = _.groupBy(this.$store.state.itinerary_preview.start_dates, (date) => monthNames[new Date(date).getMonth()]);
      for (const month in month_dates) {
        result.push({"month": month, "days": month_dates[month].join(", ")})
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>
