<template>
  <main>
   <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        <div v-for="postagem in postagens" class="col card-info" >
            <div class="card h-100 shadow-sm">
               <img @click="$router.push('detalhes')" :src="postagem.imagem" class="card-img-top" alt="imagem postagem" > 
               <div class="card-body">

                  <div class="clearfix mb-3 "> 
                    <span class="float-left price-hp data_create">{{ postagem.data_criacao }}</span> 
                    <div id="likes">
                      <img @click="atualizar_curtidas(postagem)" src="../assets/images/like.png" class="image-like-post"  alt="curtir"  > 
                      {{ postagem.curtidas }}
                      
                    </div>
                  </div>

                  <h5 class="card-title">{{ postagem.titulo }}</h5>
                  <p @click="$router.push('detalhes')" class="card-text" > {{ postagem.texto }}</p>
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
    atualizar_curtidas(postagem) {
      postagem.curtidas = postagem.curtidas + 1
      api.put(postagem).then(() => {
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

.data_create{
  color: #BEBEBE;
  width: 50%;
}
.card-title{
  color: var(--color-text-title);
}
.card-text{
  color: var(--color-text-dark);
  cursor: pointer;
}

.card-img-top{
  max-height: 400px;
  object-fit: cover;
  cursor: pointer;
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
</style>