
(function(){
    var environments = {
        development: {
            baseUrl: 'http://localhost:3000'
        },
        production: {
            baseUrl:'produrl'
        }
    }

    var currentEnvironment = environments.development;


    angular.module('restaurants-app')
	.constant( 'baseUrl' , currentEnvironment.baseUrl )
    .constant( 'apiBaseUrl' , currentEnvironment.baseUrl + "/api" );
})();