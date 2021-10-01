<template>
    <div>
        
        
<div class="recherche"><recherhceArticle/></div>
<div class="card-c"><card /></div>
<!--<div class="card-c"><CardRecherche /></div>-->
    </div>
</template>
<script>
//import CardRecherche from "../components/CardRecherche.vue";

import recherhceArticle from "../components/rechercheArticle.vue"
import card from "../components/Card.vue"
export default {
    name:"wesh",
      components: {
  recherhceArticle,card
// CardRecherche
  },
}
</script>