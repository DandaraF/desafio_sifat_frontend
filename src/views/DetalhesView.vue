<template>
  <main>
  <div id="container">
    <div id="container-content">
      <h2 class="title">{{postagem.titulo}}</h2>

      <div class="content-creator">
        <p class="creator">{{postagem.autor}} - </p>
        <p class="data_create">{{postagem.data_criacao}}</p>
      </div>

      <hr/>

      <img :src="postagem.imagem" class="image-post" alt="imagem postagem" />
      <div class="session-like">
        <img @click="atualizar_curtidas(postagem)" src="../assets/images/like.png" class="image-like-post"  alt="curtir"  > 
         {{ postagem.curtidas }}
      </div>
     
                  
      
      <div id="datasheet">
        <div class="data-anime">
          <p class="text-description">{{postagem.texto}}  </p>
          
          </div>
      </div>

      <hr/>
      <h3 class="title-related">Relacionadas</h3>


      <div id="container-related">
        <Related />
      </div>

    </div>
  </div>
</main>


</template>

<script>

import api from "@/services/api"
import Related from "../components/Related.vue"
export default {
  name: 'DetalhesView',
  components: {
    Related
  },
  data() {
    return {
      id: '',
      categoria: '',
      postagem: {
        postagem_id: '',
        titulo : '',
        texto : '',
        imagem : '',
        categoria: '',
        autor: '',
        data_criacao : null,
        curtidas: null
      }
    }
  },
  mounted() {
    this.id = this.$route.params.postagem_id
    this.listar_dados()

    this.categoria = this.postagem.categoria

  },

  methods: {
    listar_dados() {
      api.get(this.id).then((response) => {
        this.postagem = response.data
      })
    },
    atualizar_curtidas(postagem) {
      postagem.curtidas = postagem.curtidas + 1
      api.put(postagem).then(() => {
       })
    },
  },


}

</script>

<style scoped>

main{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}


#container{
  display: flex;
  width: 80%;
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
.image-like-post{
  height: 22px;
  width: 24px;
  cursor: pointer;
}
.session-like{
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  color: var(--color-text-dark);
  gap:5px;
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