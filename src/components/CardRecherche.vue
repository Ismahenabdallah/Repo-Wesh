<!--<template>
<div>
    <div class="r">
        <h3>Article</h3>
        <input v-model="recherche" type="text" placeholder="Recherche ..."/>
    </div>
    <div class="card container ">
<div class="row ">
    <div class="box">
        <div class="card"  v-for="photo in photos " :key="photo">
  <img alt="like" :src=" photo"/>
  <div class="card-body">
    <p class="card-text">  <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></p>
  </div>
</div>
</div></div></div></div>
</template>
<script>

export default {
    name:" CardRecherche" , 
    recherche:"",
  photos :[
         'curren-business.png','curren-sport.png' , 'hiphop-gold.png' ,'jaragar-racing.png'
     ] , computed:{
         filterage: function(){
             var f = new RegExp(this.recherche , 'i');
             return this.photos.filter(function(el){
return el.match(f);
             })
         }
     }
} 
</script>

<style scoped>
h3{
    font-size: 40px;
    color: black;
    font-weight: 300;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
input{
    border-color: black;
    border-radius: 5px;
}
input::placeholder{
    color: gray;

}
.r{
    margin-left:8%;
}

.card-text img {
    width: 20px;
    height: 20px;
    margin: 0 20px;
}

.row
{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
   
  }

.box:hover{
    transform: scaleX(1.1);
}
.box{
  width: 220px;
  margin-left:2px;
  margin-right: 5px;
}
</style>-->