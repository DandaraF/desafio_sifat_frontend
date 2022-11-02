<template>
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>

  
</template>

<script>
import './styles/global.css'
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  },

 
}
</script>

<style scoped>


</style>

