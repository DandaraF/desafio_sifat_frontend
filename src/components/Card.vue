<template>
  <main >
   <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        <div @click="irDetalhes(postagem)" v-for="postagem in postagens" class="col card-info"  >
            <div class="card h-100 shadow-sm">
              
               <img :src="postagem.imagem" class="card-img-top" alt="imagem postagem" > 
               <div class="card-body">

                  <div class="clearfix mb-3 "> 
                    <span class="float-left price-hp data_create">{{ postagem.data_criacao }}</span> 
                    <div id="likes">
                      <img src="../assets/images/like.png" class="image-like-post"  alt="curtir"  > 
                      {{ postagem.curtidas }}
                    </div>
                  </div>
                  <p class="category">{{ postagem.categoria }}</p>
                  <h5 class="card-title">{{ postagem.titulo }}</h5>
                  <p class="card-text" > {{ postagem.texto }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</main>
</template>

<script>
import api from '../services/api'
export default {
  name: "Card",

  data() {
    return {
      postagem: {
        postagem_id: '',
        titulo : '',
        texto : '',
        imagem : '',
        categoria : '',
        data_criacao : null,
        curtidas: null
      },
      postagens: []
    }
  },
  mounted() {
    this.listar()
  },
  methods: {
    listar() {
      api.get_all().then(response => {
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
  }
}

</script>

<style scoped>

.image-like-post{
  height: 22px;
  cursor: pointer;

}


.card-info{
  cursor: pointer;

}
.data_create{
  color: #BEBEBE;
  width: 50%;
}
.card-title{
  color: var(--color-text-title);
}
.card-text{
  color: var(--color-text-normal);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-img-top{
  max-height: 250px;
  object-fit: cover;
}

.clearfix{
  display: flex;
  justify-content: space-between;
}

#likes{
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 18px;
  color: var(--color-text-dark);
  gap:5px;
}

.category{
  color: var(--color-text-category);
  font-weight: 600;
  font-style: italic;
  opacity: 0.7;
  margin-bottom: 6px;
}

</style>