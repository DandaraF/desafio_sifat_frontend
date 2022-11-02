<template>
  <div class="container-related">
      <div v-for="postagem in postagens" class="card-related">
        <img :src="postagem.imagem" class="img-related" alt="imagem postagem" />
        
        <div class="category">Filmes</div>

        <div class="description">
            <p class="title">Overlord I, II, III e IV</p>

            <div class="info">
              <p class="info-text">24/10/2022</p>

              <div class="likes">
                <p class="info-text">88888449871</p>
                <img src="../assets/images/like.png" class="image-like"  alt="curtir"  > 
              </div>

            </div>
            <p class="text-related">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum is simply dummy text of the
            </p>
        </div>
      </div>

  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: "Related",
  props: {
    categoria: String,
    id: String
  },
  data() {
    return {
      categoria: '--',
      filter_field:'Categoria',
      filter_value: '',

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


    }
  },
  mounted() {
    this.listar_relacionadas()
  },
  methods: {

    listar_relacionadas() {
      // postagem.filter_value = postagem.categoria 
      api.filter(this.filter_field, this.postagem.categoria).then(response => {
        this.postagens = response.data
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