<template>
  <footer class="bg-light text-center text-lg-start">
    <div class="text-center p-3 footer" v-show="year"   >
      ©Copyright: {{year}} - 
      <a class="author-name" href="https://github.com/DandaraF/desafio_sifat_frontend">Dandara Silva</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      year: '2022'
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: var(--color-background-footer);
  color: var(--color-text-light);
}

.author-name{
  text-decoration: none;
  color: var(--color-text-light);
}

</style>