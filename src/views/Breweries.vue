<template>
  <div>
    <ul>
      <li v-for="brewery in breweries" :key="brewery.id">{{brewery.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
    async created(){
      try{
        this.breweries = (await axios.get("http://localhost:8080/api/breweries")).data.data
        console.log(this.breweries)
      }catch(ex){
        console.log(ex)
      }
  },
  data(){
    return {
      breweries: []
    }
  }
}
</script>

<style>

</style>