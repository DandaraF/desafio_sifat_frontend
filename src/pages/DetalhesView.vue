<template>

 
  <main>
  <div id="container">
    <div id="container-content">
      <h2 class="title">{{postagem.titulo}}</h2>

      <div class="content-info-post">
        <p class="creator">{{postagem.autor}} - {{postagem.data_criacao}}</p>
      </div>

      <div class="action-painel">
          <img @click="abrir_modal_editar" src="../assets/images/edit.png" class="image-action"  alt="alterar postagem" />
          <img @click="abrir_modal_excluir" src="../assets/images/remove.png" class="image-action"  alt="remover postagem" />
      </div>

      <hr/>

      <img :src="postagem.imagem" class="image-post" alt="imagem postagem" />
      <div class="session-like">
        <img @click="atualizar_curtidas(postagem)" src="../assets/images/like.png" class="image-like-post"  alt="curtir"/> 
         {{ postagem.curtidas }}
      </div>
      
          <p class="text-description">{{postagem.texto}} </p>

      <hr/>

      <h3 class="title-related">Relacionadas</h3>

      <div id="container-related">
        <Related />
      </div>

    </div>
  </div>
  
</main>

<div id="modal-excluir" v-if="excluir">
    <div class="container-modal">
      <div class="content-modal-excluir">
        <p>Tem certeza que deseja excluir essa postagem?</p>

        <div class="container-btn-excluir">
          <button @click="fechar_modal" class="btn btn-cancelar">Cancelar</button>
          <button @click="excluir_postagem(postagem.postagem_id)" class="btn btn-excluir">Excluir</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import api from "@/services/api"
import Related from "../components/Related.vue"
export default {
  name: 'DetalhesView',
  components: {
    Related,
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
      },
      editar: false,
      excluir: false
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
      api.put(postagem).then(() => {})
    },
    excluir_postagem(postagem_id) {
      api.delete(postagem_id).then(() => {
        this.$router.push({name: "home"})
      })
    },


    abrir_modal_editar() {
      this.editar = true
    },
    abrir_modal_excluir() {
      this.excluir = true
    },
    fechar_modal() {
      this.editar = false
      this.excluir = false
    }
    
  },


}

</script>

<style scoped>
/* ---------------MODAL EXCLUIR ------------------ */
#modal-excluir{
  top:0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  position: fixed;
  z-index: 99;
}

.container-modal{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
}

.content-modal-excluir{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(226, 223, 223);
  -webkit-box-shadow: 2px 3px 2px 1px rgba(255,255,255,0.91); 
  box-shadow: 2px 3px 2px 1px rgba(255,255,255,0.91);
  padding: 20px;
  border-radius: 4px;
}

.btn{
	border-radius:5px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
  width: 100px;
	text-decoration:none;
}
.btn-cancelar{
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	text-shadow:0px -1px 0px #2b665e;
	border:1px solid #566963;
}


.btn-excluir{
  box-shadow:inset 0px 1px 3px 0px #944444;
	background:linear-gradient(to bottom, #cf6363 5%, #8f0606 100%);
	background-color:#cf6363;
  border:1px solid #b50909;
  text-shadow:0px -1px 0px #991414
}

.btn-cancelar:hover{
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	background-color:#6c7c7c;
}
.btn-excluir:hover {
	background:linear-gradient(to bottom, #8f0606 5%, #cf6363 100%);
	background-color:#8f0606;
}
.btn:active {
	position:relative;
	top:1px;
}

.container-btn-excluir{
  display: flex;
  gap:5px;
}

/* ----------------------------------------- */


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
#container-content{
  display: flex;
  flex-direction: column;
  padding: 10px;
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

.content-info-post{
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

.action-painel{
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: flex-end;
  gap:10px;
  margin-bottom: -10px ;
}

.image-action{
  height: 25px;
  width: auto;
  cursor: pointer;
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