

(function(){
    angular.module('restaurants-app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        var homeState = {
            name: 'home',    //links
            url: '/home',    // on browser url
            templateUrl: 'app/pages/home/home.html',
            controller: 'HomeController'
        }

        var restaurantsListState = {
            name: 'restaurants',
            url: '/restaurants',
            templateUrl: 'app/pages/restaurants-list/restaurants-list.html',
            controller: 'RestaurantsListController',
            controllerAs: 'restListCtrl'
        }
        var adminState = {
            name: 'admin',
            url: '/admin',
            templateUrl: 'app/pages/admin/admin.html',
            controller: 'AdminController',
            controllerAs: 'adminCtrl'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(restaurantsListState);
        $stateProvider.state(adminState);

        $urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix('');

    });
})();