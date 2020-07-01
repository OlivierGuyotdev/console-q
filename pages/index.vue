<template>
  <div class="container">
    <b-container class="bv-example-row">
      <b-row>
        <b-col lg="5" sm="12">
          <ReceptionConsole/>
        </b-col>
        <b-col lg="7" sm="12">
          <ServiceConsole/>
        </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
import ReceptionConsole from "~/components/ReceptionConsole.vue";
import ServiceConsole from "~/components/ServiceConsole.vue";
export default {
components: {
    ReceptionConsole, ServiceConsole,
  },
}
</script>

<style lang="sass">
  $maincolor: #eee;
  $paramsnewcustomer: 2px 0px 5px 0px rgba(0,0,0,0.75);
  $boxnewcustomer : #dedede;
  $borderraduis: 5px;
  $waitinglistbgcolor:  #007bff;
  $waitinglisttextcolor:  #fff;

  .container
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background : $maincolor;

  .box-newcustomer
    background: $boxnewcustomer;
    padding: 15px;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;

  .new-customer
    border-radius: $borderraduis;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;

  .dateday
    padding-top: 10px;

  .waiting-list-ticket
    background: $waitinglistbgcolor;
    border-radius: $borderraduis;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;
    color: $waitinglisttextcolor;
    padding: 19px 2px;



</style>
