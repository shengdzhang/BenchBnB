/* global ApiActions */

(function(root) {
  'use strict';
  root.ApiUtil = {
    fetchBenches: function(bounds){
      $.ajax({
        url: '/api/benches',
        method: 'GET',
        data: {bounds: bounds},
        success: function(benches){
          ApiActions.receiveAllBenches(benches);
        }
      });
    }
  };

}(this));
