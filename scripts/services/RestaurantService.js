

(function(){
	angular.module('restaurants-app')
	.factory( 'RestaurantsService' , ["$http", RestaurantsService] );

	// previous ( name , function)
	// new (name , Array [...dependencies , function])

	function RestaurantsService($http){

		var dummyTodos =  [{
			text: "Go to shopping kljasdk jask djaksldj akljd slkjaks ldj",
			done: false,
			price: 20000,
			id: 1
		},{
			text: "Do laundry",
			done: true,
			price: 30,
			id: 2
		},{
			text: "Visit uncle john",
			done: false,
			price: 40000,
			id: 3
		},{
			text: "Complete homework",
			done: true,
			price: 50,
			id: 4
		}];


		var getRestaurants = function(){
			
			// asynchronous code
			return $http.get(
				"https://opentable.herokuapp.com/api/restaurants?country=US"
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

			// returning a promise
		}

		var getTodos = function(){
			var dummyTodosClone = dummyTodos;
			dummyTodosClone.forEach(function(todoItem){
				todoItem.created_at = new Date();
			})
			return dummyTodosClone;
		}

		var getTodoById = function(itemId){
			var dummyTodosClone = dummyTodos;
			var matchedTodo = null;
			for(var i = 0, len = dummyTodosClone.length; i < len ; i++){
				var currentTodo = dummyTodosClone[i];
				if( currentTodo.id == itemId ){
					matchedTodo = currentTodo;
					break;
				}
			}
			return matchedTodo;
		}

		return {
			getTodos : getTodos,
			getRestaurants: getRestaurants,
			getTodoById: getTodoById,
			dummyTodos: dummyTodos
		};

	}
})();