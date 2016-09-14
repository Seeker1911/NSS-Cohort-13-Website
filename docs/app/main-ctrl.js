angular.module('lucky-13')
  .controller('MainCtrl', function($scope, StudentFactory) {

    const main = this;
    main.students = StudentFactory.returnStudentData();

    $scope.picture = true;
  })
