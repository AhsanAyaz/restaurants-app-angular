

(function(){

    angular.module("restaurants-app")
    .controller( 'AdminController', ['RestaurantsService', '$uibModal', AdminControllerFunc]);


    function AdminControllerFunc(RestaurantsService, $uibModal){

        var adminCtrl = this;
        function onInit(){
            adminCtrl.showLoader = false;
            adminCtrl.restaurants = [];
            fetchAllRestaurants();
        }  
        
        adminCtrl.addNewRestaurant = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'addRestaurantModal',
                resolve: {
                    items: function () {
                        // return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (savedRestaurant) {
                // $ctrl.selected = selectedItem;
                console.log("ok was cliked");
                adminCtrl.restaurants.unshift(savedRestaurant);
            }, function () {
                // $log.info('modal-component dismissed at: ' + new Date());
                console.log("cancel was cliked");
            });
        };

        function fetchAllRestaurants(){
            // show loader
            adminCtrl.showLoader = true;
            // get restaurants from the service
            RestaurantsService.getRestaurants()
            .then( 
                function(myRestaurants){     // on success
                    adminCtrl.restaurants = myRestaurants;
                    adminCtrl.showLoader = false;    // hide loader
                    console.log(adminCtrl.restaurants);
                }, 
                function(error){            // on error     
                    console.log(error);
                    adminCtrl.showLoader = false;    // hide loader
                }
            );
        }

        onInit();
    }


})();