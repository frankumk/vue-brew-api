<template>
  <div>
    <h2>{{beer.name}}</h2>
  </div>
</template>

<script>
import axios from "axios"
export default {
  async created(){
    try{
      this.beer = (await axios.get("http://localhost:8080/api/beer/random")).data.data
    }catch(ex){
      console.log(ex)
    }
  },
  data(){
    return {
      beer: []
    }
  }
}
</script>

<style>

</style>