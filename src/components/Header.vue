<template>
  <nav>
    <div class="logo">
      Blogs Lorem
    </div>
    <div class="container-nav">

      <div class="painel-icon">
        <img src="../assets/images/home.png" class="icons"  alt="Ir para a Home" />
        <a class="nav-link" href="/">Home</a>
      </div>
      
      <div class="painel-icon">
        <img src="../assets/images/create.png" class="icons"  alt="criar postagem" />
        <a class="nav-link" >Criar post</a>
      </div> 
    </div>

  </nav>

</template>

<script>


export default {
  name: 'Header',
}

</script>

<style scoped>
nav{
  width: 100%;
}

.logo{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  height: 70px;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-style: italic;
  color: #fff;
  background-color: var(--color-background-nav);
}
.icons{
  display: none;
}

.painel-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 8px;
  padding: 20px 0 20px 30px;
  cursor: pointer;
}

@media(max-width: 768px){
  .icons{
    display: flex;
    height: 25px;
    width: 25px;
  }
  .painel-icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    color: #fff;
    gap: 8px;
  }
  .container-nav{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-background-nav-itens);
  }
}

.container-nav{
  display: flex;
  gap:10px;
  background-color: var(--color-background-nav-itens);
  cursor: pointer;
}



</style>