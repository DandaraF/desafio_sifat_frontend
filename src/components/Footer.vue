<template>
  <footer class="bg-light text-center text-lg-start">
    <div class="text-center p-3 footer" >

    <div class="content-developer">

      <a href="https://www.linkedin.com/in/dandarafsilva/" target="_blank">
        <img @click="abrir_modal_editar"  src="../assets/images/linkedin.png" class="image-social-media"  alt="ir para linkedin" />
      </a>
      
      <a href="https://github.com/DandaraF" target="_blank">
        <img @click="abrir_modal_editar"  src="../assets/images/github.png" class="image-social-media"  alt="ir para github" />
      </a>
    </div>
    <h3 class="developer">Dandara Silva</h3>


  </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
  position: relative;
}

.developer{
  color: var(--color-text-light);
  font-size: 20px;
}

.content-developer{
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 gap:10px;
 padding:10px 0;
}
.image-social-media{
  width: 24px;
}
</style>