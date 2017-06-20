

(function(){
    angular.module('restaurants-app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        var homeState = {
            name: 'home',    //links
            url: '/home',    // on browser url
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }

        var restaurantsListState = {
            name: 'restaurants',
            url: '/restaurants',
            templateUrl: 'views/restaurants-list.html',
            controller: 'RestaurantsListController',
            controllerAs: 'restListCtrl'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(restaurantsListState);

        $urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix('');

    });
})();