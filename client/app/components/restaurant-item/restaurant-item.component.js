



(function(){
    
    angular.module('restaurants-app')
    .component( 'restaurantItem', {
        bindings: {
          item: '='
        },
        controller: function(RestaurantsService){
            var restaurantItemCtrl = this;

            restaurantItemCtrl.remove = function(){
                RestaurantsService.deleteRestaurantById(restaurantItemCtrl.item._id)
                .then(function(res){
                    alert(res.message);
                })
            }
        },
        templateUrl: 'app/components/restaurant-item/restaurant-item.component.html'
    });
})();