
(function(){
    
    angular.module('restaurants-app')
    .controller( 'RestaurantsListController', ['RestaurantsService' , RestListControllerFunc]);


    function RestListControllerFunc(RestaurantsService){
        var restListCtrl = this;

        restListCtrl.showLoader = false;

        function onInit(){
            // show loader
            restListCtrl.showLoader = true;
            // get restaurants from the service
            RestaurantsService.getRestaurants()
            .then( 
                function(myRestaurants){     // on success
                    restListCtrl.restaurants = myRestaurants;
                    restListCtrl.showLoader = false;    // hide loader
                }, 
                function(error){            // on error     
                    console.log(error);
                    restListCtrl.showLoader = false;    // hide loader
                }
            );
            console.log(restListCtrl.restaurants);
        }

        // calling the on init method here
        onInit();
    }
})();