<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light t">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/wesh"><img alt=" logo" src="../assets/wish-logo-800.png" /></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/"><img alt=" user" src="../assets/user.png" /></router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" to="/like"><img alt="like" src="../assets/like.png" /></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/shopping-cart.png"><img alt=" logo" src="../assets/shopping-cart.png" /></router-link>
        </li>
       </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    name:"NavBar"
}
</script>
<style scoped>
 li img{
  width:30px;
  height: 30px;
   margin-left: 200px;
}
.navbar-brand img{
transform: scaleX(2);

width: 55px;
  height: 55px;
  margin-right: 300px;
  margin-left: 40px;
}
nav{
   box-shadow: 2px 2px 2px 2px #eee;
}

</style>