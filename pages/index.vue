<template>
  <div class="container">
    <b-container>
      <b-row>
        <b-col lg="5" sm="12">
          <ReceptionConsole/>
        </b-col>
        <b-col lg="7" sm="12" class="bg-service-console">
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
  $maincolor: #666;
  $paramsnewcustomer: 2px 0px 5px 0px rgba(0,0,0,0.75);
  $boxnewcustomer : #dedede;
  $borderraduis: 5px;
  $waitinglistbgcolor:  #007bff;
  $waitinglisttextcolor:  #fff;
  $bg-service-console: #ffffff96;

  body
    background : $maincolor;

  .container
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


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

  .waiting-list
    overflow-x: hidden;
    overflow-y: scroll;
    height: 395px;

  .waiting-list-ticket
    background: $waitinglistbgcolor;
    border-radius: $borderraduis;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;
    color: $waitinglisttextcolor;
    padding: 29px 2px;

  .tickets
    padding: 10px 0;

  .bg-service-console
    background-color: $bg-service-console;
    padding: 25px;



</style>
