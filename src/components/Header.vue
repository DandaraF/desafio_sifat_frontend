<template>
  <nav>
    <div class="logo">
      <a class="link-logo" href="/">Blog Lorem</a>
    </div>
    <div class="container-nav">

      <div class="painel-icon">
        <img src="../assets/images/home.png" class="icons"  alt="Ir para a Home" />
        <a  class="nav-link" href="/">Home</a>
      </div>
      
      <div class="painel-icon">
        <img src="../assets/images/create.png" class="icons"  alt="criar postagem" />
        <a @click="abrir_modal_cadastrar()" class="nav-link" >Criar post</a>
      </div> 
    </div>

  </nav>

  <div class="model-modal" v-if="visible" >
    <div class="container-modal ">

      <div class="container-cadastrar">
        <label>Título:</label>
        <input type="text" placeholder="Lorem Ipsum" v-model="postagem.titulo" >
        <label>Categoria:</label>
        <input type="text" placeholder="Digite o nome categoria" v-model="postagem.categoria">
        <label>Autor:</label>
        <input type="text" placeholder="Maria do Bairro" v-model="postagem.autor" >
        <label>Url da imagem:</label>
        <input type="text" placeholder="https://picsum.photos/200/300" v-model="postagem.imagem" >
        <label>Texto:</label>
        <textarea rows="7" v-model="postagem.texto" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing" maxlength="3000"></textarea>
        <p class="caracteres">Máx caracteres: 3000</p>
        <div class="container-btn">
            <button @click="fechar_modal" class="btn btn-cancelar">Cancelar</button>
            <button @click="cadastrar_postagem" class="btn btn-cadastrar">Cadastrar</button>
          </div>
      </div>
    </div>

  </div>


</template>

<script>
import { Modal } from 'bootstrap';
import api from "@/services/api"

export default {
  name: "Header",
  components: {
    Modal
  },

  data() {
    return {
      postagem: {
        titulo : '',
        texto : '',
        imagem : '',
        categoria: '',
        autor: ''
      },
      visible: false
    }
  },
  methods: {
    abrir_modal_cadastrar() {
      this.visible = true
    },
    fechar_modal() {
      this.visible = false
    },
    cadastrar_postagem() {
      console.log('-------', this.postagem)

      api.post(this.postagem).then(() => {
        this.visible = false
        alert('Post cadastrado com sucesso')
         this.$router.push({ name: "home" })

       })
        .catch(()=>{
          alert("Preencha todos os campos vazios!")
      })
    },
  },

  
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
  height: 80px;
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
.link-logo{
  text-decoration: none;
  color: #fff;
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

/* ---------------Modal-------------------*/
.model-modal{
  top:0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  position: fixed;
  z-index: 99;
}
.container-cadastrar{
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
  text-transform: capitalize;
  
}
input textarea::placeholder{
  color:#cccccc;
  font-style: italic;
}

textarea{
  width: 100%;
  resize: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgb(187, 187, 187);
  padding: 4px;
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


.container-modal{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
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

.btn-cancelar{
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	text-shadow:0px -1px 0px #2b665e;
	border:1px solid #566963;
}

.btn-cancelar:hover{
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	background-color:#6c7c7c;
}

.btn-cadastrar{
  box-shadow:inset 0px 1px 3px 0px #944444;
	background:linear-gradient(to bottom, #cf6363 5%, #8f0606 100%);
	background-color:#cf6363;
  border:1px solid #b50909;
  text-shadow:0px -1px 0px #991414
}

.btn-cadastrar:hover {
	background:linear-gradient(to bottom, #8f0606 5%, #cf6363 100%);
	background-color:#8f0606;
}

/* ------------------------------------- */

@media(max-width:767px){
   textarea{
    min-width: 300px;
  }
  .container-cadastrar{
    width: 330px;
    padding: 10px;
  }
}


</style>