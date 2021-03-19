<template>
  <div>
    <ul>
      <li v-for="brewery in breweries" :key="brewery.id"><router-link :to="{ name: 'Brewery', params: {breweryname: brewery.name}}">{{brewery.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
// import Brewery from '../views/Brewery'
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