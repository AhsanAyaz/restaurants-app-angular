


(function(){
    
    angular.module('restaurants-app')
    .component( 'app', {
        controller: function(){
            var appCtrl = this;
            appCtrl.user = {
                role: 'admin'
            }
        },
        template: `
            <nav-bar user="$ctrl.user"></nav-bar>
            <ui-view></ui-view>
        `
    });
})();