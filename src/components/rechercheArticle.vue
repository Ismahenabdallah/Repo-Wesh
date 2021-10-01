<template>
    <div class="r">
        <h3>Article</h3>
        <input v-model="recherche" type="text" placeholder="Recherche ..."/>
    </div>
</template>
<script>
export default {
    name:"recherche"
    ,
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
</style>