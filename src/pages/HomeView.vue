<template>  
<main>
  <div class="container">
    <Card/>
  </div>
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
  flex-direction: column;
  justify-content: center;
  padding: 0 10px ;
  box-sizing: border-box;
}

.container{
  width: 95%;

}

</style>