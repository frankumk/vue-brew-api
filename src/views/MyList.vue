<template>
  <div>
    <h1>My Saved Breweries</h1>
    <ul>
      <li v-for="brewery in breweriesToVisit" :key="brewery.id">{{brewery}}</li>
    </ul>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  created(){},
  computed: {
    ...mapState({
      breweriesToVisit: state => state.savedList
    })
  },
}
</script>

<style>

</style>