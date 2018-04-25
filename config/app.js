/**
 * SmpleGHPrj
 */
(function () {
    angular.module('SmpleGHPrj', [
        'ngResource', 
        'oitozero.ngSweetAlert',
        'angularFileUpload' ,
        'ui.router',                   
        'oc.lazyLoad',                
        'ui.bootstrap',               
         'cgNotify',
         'datePicker',
         'doneComponentsSet'
    ])
})();


function getBaseURL() {
	   return location.protocol + "//" + location.hostname + 
	      (location.port && ":" + location.port) ;
}; 
function getAppName(p) {
   return "/";
}
var _appUrl = getBaseURL()+getAppName(window.location.pathname);

