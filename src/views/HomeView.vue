<template>  
<main>
  <Card/>

</main>
</template>

<script>
import Card from '../components/Card.vue'

export default {

  name: 'HomeView',
  components: {
   Card
  }
}

</script>

<style scoped> 
main{
  display: flex;
  justify-content: center;
  padding: 0 10px ;
}
</style>