import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'abc123', name: 'kayla'},
    count: 0,
    breweries: [],
    savedList: []
  },
  mutations: {
    // INCREMENT_COUNT(state){
    //   state.count +=1
    // },
    ADD_TO_PLACES(state,place){
      console.log(place)
      state.savedList.push(place)
    },
    SET_BREWERIES(state, breweries){
      state.breweries = breweries
    }
  },
  actions: {
    // updateCount({state,commit}, incrementBy){
    //   if(state.user){
    //     commit('INCREMENT_COUNT',incrementBy)
    //   }
    // },
    addToPlaces({commit}, name){
      commit('ADD_TO_PLACES', name)
    },
    async fetchBreweries({commit}){
      try{
        const breweries = (await axios.get("http://localhost:8080/api/breweries")).data.data
        console.log(breweries)
        commit('SET_BREWERIES', breweries)
      }catch(ex){
        console.log(ex)
      }
    }

  },
  modules: {}
});
