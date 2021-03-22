<template>
  <div>
    <p>Hello Brewery, {{$route.params.breweryname}}</p>
    <!-- <p> {{username}}</p> -->
    <button @click="onClick($route.params.breweryname)">Add To Places</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      username: state => state.user.name
    })
  },
  methods: {
    onClick(name){
      this.$store.dispatch('addToPlaces', name)
      console.log(name + " added")
      this.$router.push({name: 'SavedList'})
    }
  }
  //computed: mapState(user) and then user.name above
}
</script>

<style>
</style>
