<template>
  <div id="app">
    <!-- <Card/> -->
    <HeaderComponent/>
  </div>
  
</template>

<script>
import './styles/global.css'
// import Card from './components/Card.vue'
// import FooterComponent from './components/Footer.vue'
import HeaderComponent from './components/Header.vue'
export default {
  
  name: 'App',
  components: {
    // Card,
    // FooterComponent
    HeaderComponent
  }
}
</script>

