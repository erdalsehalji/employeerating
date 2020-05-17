<template>
    <div class="EmployeeCard">
        <EmployeeCardComponent/>
        <EmployeeCardComponent/>
        <EmployeeCardComponent/>
    </div>
</template>

<script>
import EmployeeCardComponent from '@/components/EmployeeCardComponent.vue'

export default {
  data () {
    return {

    }
  },
  name: 'EmployeeCard',
  components: {
    EmployeeCardComponent
  }
}
</script>
