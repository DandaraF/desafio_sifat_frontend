<template>
  <main>
  <div id="container">
    <div id="container-content">
      <h1 class="title">{{postagem.titulo}}</h1>

      <div class="content-info-post">
        <p class="creator">
          <img src="../assets/images/autor.png" class="icon"  alt="nome autor" /> 
          {{postagem.autor}}
          <img src="../assets/images/calendar.png" class="icon"  alt="data de criação" />
           {{postagem.data_criacao}}</p>
      </div>

      <div class="action-painel">
          <img @click="abrir_modal_editar" title="Editar postagem" src="../assets/images/edit.png" class="image-action"  alt="alterar postagem" />
          <img @click="abrir_modal_excluir" title="Excluir postagem" src="../assets/images/remove.png" class="image-action"  alt="remover postagem" />
      </div>

      <hr/>

      <img :src="postagem.imagem" class="image-post" alt="imagem postagem" />
      <div class="session-like-category">
        <p class="text-category">{{postagem.categoria}}</p>
        <div class="like">
          <img @click="atualizar_curtidas(postagem)" src="../assets/images/like.png" class="image-like-post"  alt="curtir"/> 
          {{ postagem.curtidas }}
        </div>
      </div>

      <div class="text-description">{{postagem.texto}} </div>

      <hr/>
      
      <h3 class="title-related">Relacionadas</h3>

      <div id="container-related">
        <Related />
      </div>

    </div>
  </div>
  
</main>
<!-- --------------Modal Excluir ------------------ -->
<div class="model-modal"  v-if="excluir" >
    <div class="container-modal container-excluir">
      <div class="content-modal-excluir">
        <p>Tem certeza que deseja excluir essa postagem?</p>

        <div class="container-btn">
          <button @click="fechar_modal" @click.cl class="btn btn-cancelar">Cancelar</button>
          <button @click="excluir_postagem(postagem.postagem_id)" class="btn btn-excluir">Excluir</button>
        </div>
      </div>
    </div>
  </div>
<!-- --------------Modal Editar ------------------ -->
<div class="model-modal" v-if="editar" >
  <div class="container-modal ">

    <div class="container-editar">
      <label>Título:</label>
      <input type="text" v-model="postagem.titulo" >
      <label>Categoria:</label>
      <input type="text"  v-model="postagem.categoria" >
      <label>Autor:</label>
      <input type="text"  v-model="postagem.autor" >
      <label>Url da imagem:</label>
      <input type="text"  v-model="postagem.imagem" >
      <label>Texto:</label>
      <textarea rows="7" v-model="postagem.texto" maxlength="3000"></textarea>
      <p class="caracteres">Máx caracteres: 3000</p>
      <div class="container-btn">
          <button @click="fechar_modal" class="btn btn-cancelar">Cancelar</button>
          <button @click="atualizar_postagem(postagem)" class="btn btn-excluir">Atualizar</button>
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
    atualizar_postagem(postagem) {
      this.postagem = postagem

      api.put(postagem).then(() => {
        this.fechar_modal()   
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
      this.listar_dados()
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
  box-sizing: border-box;
}

#container{
  display: flex;
  width: 80%;
  height: 100%;
  padding: 10px;
  height: 100%;
  background-color: var(--color-background); 
}

main{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

#container-detalhes{
  display: flex;
  width: 80%;
  height: 100%;
  background-color: var(--color-background); 
  box-sizing: border-box;
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
.session-like-category{
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: var(--color-text-dark);
}
.text-category{
   color: var(--color-text-normal);
   font-style: oblique;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.like{
  display: flex;
  gap:5px;
  padding-right: 10px;
}
.title-related{
  font-weight: 600;
}
.text-description{
  display: flex;
  flex-wrap: wrap;
  text-indent: 2rem;
  box-sizing: border-box;
}
.title{
  text-align: center;
}

.input-title{
  font-size: 26px;
  text-align: center;
  font-weight: 600;
  border: none;
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
  display: flex;
  align-items: center;
  text-align: center;
}

.icon{
  margin: 0 3px 0 10px;
  width: 18px;
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

/* ------------------MODAL EDITAR ------------------ */
.container-editar{
  display: flex;
  flex-direction: column;
  background-color: rgb(226, 223, 223);
  -webkit-box-shadow: 2px 3px 2px 1px rgba(255,255,255,0.91); 
  box-shadow: 2px 3px 2px 1px rgba(255,255,255,0.91);
  padding: 20px;
  border-radius: 4px;
  gap:5px;
  margin-top: 30px;
  width: 750px;
}
input{
  border-radius: 4px;
  padding: 4px;
  outline: none;
  border: 1px solid rgb(187, 187, 187);
}
textarea{
  width: auto;
  resize: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgb(187, 187, 187);
  padding: 4px;
}

/* ---------------MODAL EXCLUIR ------------------ */
.model-modal{
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
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  padding:10px;

}

.caracteres{
  text-align: right;
}
.container-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  gap:15px;
}

.container-excluir{
  margin-top: 40px;
  padding: 30px;
}

.content-modal-excluir{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(228, 228, 228, 0.897);
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

.btn-excluir{
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	text-shadow:0px -1px 0px #2b665e;
	border:1px solid #566963;
}

.btn-excluir:hover{
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	background-color:#6c7c7c;
}

.btn-cancelar{
  box-shadow:inset 0px 1px 3px 0px #944444;
	background:linear-gradient(to bottom, #cf6363 5%, #8f0606 100%);
	background-color:#cf6363;
  border:1px solid #b50909;
  text-shadow:0px -1px 0px #991414
}

.btn-cancelar:hover {
	background:linear-gradient(to bottom, #8f0606 5%, #cf6363 100%);
	background-color:#8f0606;
}

.btn:active {
	position:relative;
	top:1px;
}
/* ----------------------------------------- */

@media(max-width: 900px){
  .container-editar{
    width: 650px;
  }
}
@media(max-width: 900px){
  .container-editar{
    width: 650px;
  }
}
@media(max-width:767px){
  main{
    justify-content: center;
  }
  #container{
    width: 100%;
    margin: 10px 0;
  }
  textarea{
  width: 355px;
  }
  .container-editar{
    width: 320px;

  }
  .content-info-post{
    margin-bottom: 0;
  }

}



</style>