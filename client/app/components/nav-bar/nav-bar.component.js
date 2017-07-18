


(function(){
    
    angular.module('restaurants-app')
    .component( 'navBar', {
        bindings: {
          user: '<'
        },
        controller: function(){
            var navBarCtrl = this;
        },
        templateUrl: 'app/components/nav-bar/nav-bar.component.html'
    });
})();