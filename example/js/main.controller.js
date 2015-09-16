(function() {

angular.module('app.main', [])

.controller('MainCtrl', function() {
    this.options = ['All', 'Yes', 'No'];
    this.openSource = 'All';
    this.trending = 'All';

    this.timeOptions = ['All', 'Last week', 'Last month'];
    this.time = 'All';
});

})();
