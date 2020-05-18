<template>
  <div class="EmployeeCard">
     <EmployeeCardComponent :key="card.id" :info="card" v-for="card in filteredCards"/>
  
    </div>
</template>

<script>


// @ is an alias to /src
import EmployeeCardComponent from '@/components/EmployeeCardComponent.vue'

import store from '@/store.js'

export default {
  data () {
    return store;
  },
  computed: {
    filteredCards () {
      // let filtered = []
      // for(let card of this.cards) {
      //   if (card.title.includes(this.searchTerm)) {
      //     filtered.push(card)
      //   }
      // }
      // return filtered;
      return this.cards
    }
  },
  name: 'EmployeeCard',
  components: {
    EmployeeCardComponent,
   
  }
}
</script>

