const mutations = {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
}

const state = {
  count: 10
}

const getters =  {
    count: state => {
      return state.count;
    }
  }

export default {
  namespaced: false,
  state,
    getters,
  mutations
}