<template>
  <div class="container-related">
      <div v-for="postagem in postagens" class="card-related" @click="irDetalhes(postagem)">
        <img :src="postagem.imagem" class="img-related" alt="imagem postagem" />
        
        <div class="category">{{postagem.categoria}}</div>

        <div class="description">
            <p class="title">{{postagem.titulo}}</p>

            <div class="info">
              <p class="info-text">{{postagem.data_criacao}}</p>

              <div class="likes">
                <p class="info-text">{{postagem.curtidas}}</p>
                <img src="../assets/images/like.png" class="image-like"  alt="curtir"  > 
              </div>

            </div>
            <p class="text-related">{{postagem.texto}}</p>
        </div>
      </div>

  </div>
</template>

<script>
import api from '@/services/api';
import { tSExpressionWithTypeArguments } from '@babel/types';

export default {
  name: "Related",

  data() {
    return {
      postagem: {
        postagem_id: '',
        autor: '',
        titulo : '',
        texto : '',
        imagem : '',
        categoria : '',
        data_criacao : null,
        curtidas: null    
      },
      postagens: [],
      id:'',
      filter_field: 'categoria',
      filter_value: ''

    }
  },
  mounted() {
    this.filter_value = this.$route.params.categoria
    this.id = this.$route.params.postagem_id
    this.listar_relacionadas()
  },
  methods: {
    listar_relacionadas() {
      api.filter(this.filter_field, this.filter_value).then((response) => {
        this.postagens = response.data

      })
    },
    irDetalhes(postagem) {
      this.$router.push({
        name: "detalhes",
        params: {
          postagem_id: postagem.postagem_id,
          categoria: postagem.categoria
        }
      })
    }
  },



}

</script>

<style scoped>

.container-related{
  display: grid ;
  grid-template-columns: 1fr 1fr 1fr;
  width: auto;
  justify-content: center;
  gap: 15px;
}

/* @media(max-width: 956px){
  .container-related{
    grid-template-columns: 1fr 1fr;
  }
} */
@media(max-width: 768px){
  .container-related{
    grid-template-columns: 1fr 1fr;
  }
}


.card-related{
  width: 300px;
  background-color: rgba(0,0,0,.02);
  border: 1px solid rgba(0,0,0,.03);
}
.description{
  padding: 10px 10px 0;
}

.category{
  text-align: center;
  background-color: var(--color-background-footer);
  opacity: 0.8;
  width: auto;
  color:var(--color-text-light);
  font-style: italic;
  padding: 5px 0;
}

.title{
  font-weight: 600;
}
.img-related{
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.info{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.info-text{
  color: var(--color-text-normal)
}
.likes{
  display: flex;
  gap: 5px;
}
.image-like{
  width: 18px;
  height: 18px;
}

.text-related{
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;

}



</style>