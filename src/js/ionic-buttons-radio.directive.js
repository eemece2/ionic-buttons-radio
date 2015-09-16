(function() {

angular.module('ionic.buttons.radio', [])

.directive('ionicButtonsRadio', function() {
    return {
        restrict: 'E',
        scope: {
            model: '=',
            options:'='
        },
        controller: function($scope){
            $scope.activate = function(option){
                $scope.model = option;
                console.log(option);
            };
        },
        template: "<button type='button' class='button' "+
            "ng-class='{\"button-balanced\": option == model}'"+
            "ng-repeat='option in options' "+
            "ng-click='activate(option)'>{{option}} "+
            "</button>"
    };
});

})();
