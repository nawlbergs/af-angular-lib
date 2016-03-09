// master module which includes all other modules
angular.module('af.lib',
  [
  // api
    'af.httpInterceptor',
    'af.api',
    'af.apiUtil',
    'af.jwtManager',
  // managers
    'af.authManager',
    'af.roleManager',
    'af.moduleManager',
    'af.redirectionManager',
  // system
    'af.bsIcons',
    'af.event',
    'af.filters',
    'af.loader',
    'af.modal',
    'af.msg',
    'af.storage',
    'af.util',

  // ui
    'af.bar',

  // forms
    'af.directive.formGroup',

  // wrappers
    'af.appEnv',
    'af.appTenant',
    'af.appTrack',
    'af.appCatch',
  // lib wrappers
    '$',
    'amplify',
    '_',
    'moment'

  // these are not included by default
    //'ui.bootstrap.dropdown'
    //'af.validators'

  // shims
    //'ng.shims.placeholder''
  ]
);