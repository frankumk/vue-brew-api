<template>
  <div>
    <ul>
      <li v-for="brewery in breweries" :key="brewery.id"><router-link :to="{ name: 'Brewery', params: {breweryname: brewery.name}}">{{brewery.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import Brewery from '../views/Brewery'
export default {
    created(){
      this.$store.dispatch('fetchBreweries')
  },
  computed: {
    ...mapState(['breweries'])
  }
}
</script>

<style>

</style>