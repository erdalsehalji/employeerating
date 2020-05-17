<template>
  <div class="AdminDashboard">
     <AdminDashboardComponent/>
     <AdminDashboardComponent/>
     <AdminDashboardComponent/>
    </div>
</template>

<script>


// @ is an alias to /src
import AdminDashboardComponent from '@/components/AdminDashboardComponent.vue'

export default {
  data () {
    return {
     
   
    }
  },
  name: 'AdminDashboard',
  components: {
    AdminDashboardComponent
  }
}


</script>
