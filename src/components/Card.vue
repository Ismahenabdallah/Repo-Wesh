 <template>
    <div>
<div class="card container ">
<div class="row ">
  <!--
    <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/curren-business.png"/>
  <div class="card-body">
    <h3 class="card-text">  <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></h3>
  </div>
</div>
</div>-->
  <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/curren-sport.png"/>
  <div class="card-body">
    <div  class="card-text">
      <h3>
        curren-sport <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>

  <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/jaragar-racing.png"/>
  <div class="card-body">
    <div  class="card-text">
      <h3>
     jaragar-racing <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>

  <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/liges-hommes.png"/>
   <div class="card-body">
    <div  class="card-text">
      <h3>
       liges-hommes <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/tissot-multifunction.png"/>
  <div class="card-body">
    <div  class="card-text">
      <h3>
        tissot-multifunction <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/relogio-masculino.png"/>
  <div class="card-body">
    <div  class="card-text">
      <h3>
       relogio-masculino <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/quarz-luxe.png"/>
  <div class="card-body">
    <div  class="card-text">
      <h3>
      quarz-luxe <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/montre-mecanique.png"/>
   <div class="card-body">
    <div  class="card-text">
      <h3>
       montre-mecanique<span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/mesh-genova.png"/>
   <div class="card-body">
    <div  class="card-text">
      <h3>
        curren-sport <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/maserati-mechanical.png"/>
   <div class="card-body">
    <div  class="card-text">
      <h3>
      maserati-mechanical <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
 <div class="box">
        <div class="card" >
  <img alt="like" src="../assets/brand-designer.png"/>
   <div class="card-body">
    <div  class="card-text">
      <h3>
       brand-designer <span class="badge badge-primary text-primary">12£</span></h3></div > 
      <div class="icone">
       <img src="../assets/like.png"> <img src="../assets/shopping-cart.png"></div>
  </div>
</div>
</div>
</div>
</div>
    </div>
</template>
<script>
export default {
    name:"card"
    , 
}
</script>
<style scoped>
.icone img {
    width: 20px;
    height: 20px;
   justify-content:space-evenly;
     align-items: center;
   display: inline-flex;
   margin: 0 10px;
}
.card-text{
 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.8rem;
    position: absolute;
    bottom: 1rem;
    opacity: 0;
    transition: 0.6s;
    width: 80%;
    height: 75px;
    background: linear-gradient(10deg, #ddd 70%, transparent 100%);
    
}
.card-text:hover{
  opacity: 1;
  transform: translateY(-40%);
}


.row
{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
   
  }

.box{
  width: 220px;
  margin-left:2px;
  margin-right: 5px;
}
.card > img {
   height: 210px;
    transition: 0.4s ease;

}
h3{
 font-family: fantasy;
 font-weight: 300;
 font-size: 22px;
}
@media (max-width:1100px)
{
   .row
{
    display: grid;
    grid-template-columns: auto auto  auto ;
   
  }
}
@media(max-width:750px)
{
  .row
{
    display: grid;
    grid-template-columns: auto auto ;
   
  }

}
@media (max-width:610px)
{
 .row
{
    display: grid;
    grid-template-columns: auto  ;
   
  }
  .container{
   margin: 0;
  }
 
}

</style>