<template>
  <div>
    <div class="waiting-list">
      <h3>Waiting list service</h3>
      <p>Please wait until an agent call you, thanks</p>
      <hr>
      <b-row align-h="center">
        <b-col sm="2" class="waiting-list-ticket">
          <h2>{{ $store.state.counter }}</h2>
        </b-col>
        <b-col sm="8">
          <p class="font-weight-bold ">26/02/2018</p>
          <div class="d-flex justify-content-between">
            <div class="text-truncate pl-0 mb-3 col-11">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            </div>
          </div>
        </b-col>
      </b-row>
      <hr>
    </div>
  </div>
</template>
