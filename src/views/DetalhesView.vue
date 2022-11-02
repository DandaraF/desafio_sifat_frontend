<template>
  <main>
  <div id="container">
    <div id="container-content">
      <h2 class="title">Attack on Titans</h2>

      <div class="content-creator">
        <p class="creator">Fernanda Novais - </p>
        <p class="data_create">2022-10-31</p>
      </div>

      <hr/>

      <img src="https://picsum.photos/200/300?grayscale" class="image-post" alt="imagem postagem" />
      
      <div id="datasheet">
        <h4 class="autor-datasheet">Gustavo das nuvens</h4>
        <div class="data-anime">
          <p class="text-description">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
      </div>

      <hr/>
      <h3 class="title-related">Relacionadas</h3>


      <div id="container-related">
        <Related/>

      </div>

    </div>
  </div>
</main>


</template>

<script>

import Related from "../components/Related.vue"
export default {
  name: 'DetalhesView',
  components: {
    Related
  }
}

</script>

<style scoped>

main{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}


#container{
  display: flex;
  width: 60%;
  margin: 10px 0 10px 6%;
  height: 100%;
  padding: 10px;
  height: 100%;
  background-color: var(--color-background); 
}

@media(max-width:767px){
  main{
    justify-content: center;
  }
  #container{
    width: 100%;
    margin: 10px 0;
  }

}
.title{
  text-align: center;
}



.content-creator{
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 margin-bottom: -20px;
 color: var(--color-text-normal);
}

.creator{
  text-align: center;
}

#container-content{
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.image-post{
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

#datasheet{
  margin-top: 15px;
}

#container-related{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
}

h3{
  font-size: 24px;
  font-weight: 500;
}

</style>