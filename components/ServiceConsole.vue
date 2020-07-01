<template>
  <div>
    <div class="waiting-list">
      <h3>Waiting list service</h3>
      {{ tickets }}
      <p>Please wait until an agent call you, thanks</p>
      <hr>
      <div v-for="(item, index) in tickets" class="tickets">
        <b-row align-h="center">
          <b-col sm="2" class="waiting-list-ticket">
            <h2>{{ item.id }} </h2>
          </b-col>
          <b-col sm="8">
            <p>Customer arrival:<br><span class="font-weight-bold ">{{ item.dateCreate |moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span></p>
            <p>{{ item.name }} | service </p>
            <a @click="removeItem(item)">delete</a>
            <a @click="view(item)">VIEW</a>
          </b-col>
        </b-row>
      </div>
      <hr>

    </div>

    <h1>Current Ticket : {{ currentTicket }}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          dateCreateTicket: new Date(),
          items: [
          { name: 'Foo' },
        ]
      }
    },
    computed: {
    ...mapGetters({
     tickets: 'tickets',
     currentTicket: 'currentTicket'
   }),
    },
    methods: {
      view(item){
        this.$store.commit('VIEW_TICKET', item)
      },
      removeItem(item){
        this.$store.commit('DELETE_TICKET', item)
      }
  }
  }
</script>
