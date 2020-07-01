import Vuex from 'vuex'

const ticketCustomer = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 500
    }),
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  })
}

export default ticketCustomer