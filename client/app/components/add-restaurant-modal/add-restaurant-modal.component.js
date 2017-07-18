




(function(){
    
    angular.module('restaurants-app')
    .component('addRestaurantModal', {
        templateUrl: 'app/components/add-restaurant-modal/add-restaurant-modal.component.html',
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: function (RestaurantsService) {
            var $ctrl = this;

            $ctrl.newRestaurant = {
                name: '',
                description: '',
                image_url: ''
            }

            $ctrl.$onInit = function () {
                
            };

            $ctrl.ok = function () {
                if(!$ctrl.newRestaurant.name){
                    alert("Restaurant name should not be empty");
                }
                else{
                    RestaurantsService.createRestaurant($ctrl.newRestaurant)
                    .then(function(savedRestaurant){
                        $ctrl.close({$value: savedRestaurant});                        
                    });
                }
            };

            $ctrl.cancel = function () {
                $ctrl.dismiss({});
            };
        }
        });
})();