angular.module('AngularRails')
    .controller('HomeCtrl', function ($scope, $pusher) {
        var client = new Pusher('1f288f0620a39bfe75a4');
        var pusher = $pusher(client);
        var my_channel = pusher.subscribe('test_channel');
        my_channel.bind('my_event',
          function(data) {
            $scope.result = data.message;
          }
        );
        $scope.things = ['Angular', 'Rails 4.2.2', 'Working', 'Together!!'];
    });
