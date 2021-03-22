import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'abc123', name: 'kayla'},
    count: 0,
    savedList: []
  },
  mutations: {
    // INCREMENT_COUNT(state){
    //   state.count +=1
    // },
    ADD_TO_PLACES(state,place){
      console.log(place)
      state.savedList.push(place)
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
    }

  },
  modules: {}
});
