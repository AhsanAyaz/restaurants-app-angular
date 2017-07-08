

(function(){
	angular.module('restaurants-app')
	.factory( 'RestaurantsService' , ["$http", "apiBaseUrl", RestaurantsService] );

	// previous ( name , function)
	// new (name , Array [...dependencies , function])

	function RestaurantsService($http, apiBaseUrl){

		var apiCallUrl = apiBaseUrl + "/restaurant";

		var getRestaurants = function(){
			return $http.get(
				apiCallUrl
			).then(function(response){
				var rest = response.data.restaurants;
				rest.forEach(function(restItem){
					restItem.owner = "Ahsan Ayaz";
				});
				return rest;
			}, function(error){
				console.log(error);
				return error;
			})
		}

		var getRestaurantById = function(restaurantId){
			return $http.get(
				apiCallUrl + "/" + restaurantId
			).then(function(response){
				var rest = response.data.restaurant;
				return rest;
			}, function(error){
				console.log(error);
				return error;
			})
		}

		return {
			getRestaurants: getRestaurants,
			getRestaurantById: getRestaurantById
		};

	}
})();