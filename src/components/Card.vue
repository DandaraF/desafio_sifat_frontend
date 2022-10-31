<template>
  <main>
   <div class="container-fluid bg-trasparent my-4 p-3 card-post" style="position: relative;">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
         
        <div class="col">
            <div class="card h-100 shadow-sm">
               <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" class="card-img-top" alt="imagem postagem"> 
               <div class="card-body">
                  <div class="clearfix mb-3"> <span class="float-left price-hp data_create">10/2/25</span> <img class="image-like-post float-end" src="../assets/images/deslike.png"> </div>
                  <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                  <p class="card-text"> Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</p>
                  <div class="text-center my-4"> <a href="#" class="btn btn-warning">Mais informações</a> </div>
               </div>
            </div>
         </div>
         
         
      </div>
   </div>
</main>
</template>

<script>
export default {
  name: "Card"
}

</script>

<style scoped>


.image-like-post{
  height: 24px;
}

.data_create{
  color: #BEBEBE;
}
.card-title{
  color: var(--color-text-title);
}
.card-text{
  color: var(--color-text-dark);
}

.button{
  color: var(--color-background-button)
}
</style>