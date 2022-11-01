<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand logo-site" href="#">Fon Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto menu">
      <li class="nav-item active">
        <router-link to="/" class="nav-link"> Home</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/detalhes">Sobre</a>
      </li>
    </ul>

  </div>
</nav>
</template>

<script>

export default {
  name:'Header'
}

</script>

<style scoped>

.navbar{
  padding:10px;
  background-color: var(--color-background-nav);
}

.menu{
  display: flex;
  justify-content: right;
  width: 100%;
}



</style>