/* global AppDispatcher */
/* global BenchConstants */
/* global ApiUtil */

window.ApiActions = {
  receiveAllBenches: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  invokeFetch: function(bounds){
    ApiUtil.fetchBenches(bounds);
  }
};
