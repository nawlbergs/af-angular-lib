(function() {

  
  //
  // SIMPLE WRAPPER AROUND AMPLIFY.STORE TO ALLOW NAME SPACING...
  //
  var myApp = angular.module('af.storage', []);

  myApp.constant('STORAGE_PREFIX', 'myApp');

  myApp.service('$storage', function(STORAGE_PREFIX, $log) {

    var sessionData = {};

    // ensure options are in correct format: { expires:x }
    var checkOptions = function(options){
      if(Object.isNumber(options)) return { expires:options };
      if(Object.isObject(options) && Object.has(options, 'expires')) return options;
      return null;
    };

    var service = {

      // data stored with prefix pertaining to a particular application only
      store:function(key, value, options){
        if(key) return amplify.store(STORAGE_PREFIX + '_' + key, value, checkOptions(options));
        // get all data
        var appData = {};
        var storedData = amplify.store();
        storedData.each(function(value, key){
          if (service.isAppData(key)) appData[key] = value;
        });
        return appData;
      },

      // data that will be gone if page refreshed.
      session:function(key, value){
        if(arguments.length == 0) return sessionData;
        if(arguments.length == 1) return sessionData[key];
        sessionData[key] = value;
      },

      clear: function() {
        sessionData = {};
        Object.keys(amplify.store(), function(key, value){
          if(service.isAppData(key)) amplify.store(key, null);
        });
      },

      isAppData:function(key){ return key.indexOf(STORAGE_PREFIX+'_') === 0; }

    };

    return service;
  });

}).call(this);