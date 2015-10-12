/* global EventEmitter */
/* global AppDispatcher */
/* global BenchConstants */
(function(root) {
  'use strict';
  var CHANGE_EVENT = "CHANGE_EVENT";
  var _benches = [];

  var resetBenches = function (benches) {
    _benches = benches;
    BenchStore.emitChange();
  };

  root.BenchStore = $.extend ({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice();
    },
    emitChange: function(){
      this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case (BenchConstants.BENCHES_RECEIVED):
          resetBenches(payload.benches);
          break;
      }
    })
  });
}(this));
