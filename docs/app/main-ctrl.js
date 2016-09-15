angular.module('lucky-13')
  .controller('MainCtrl', function($scope, StudentFactory, $timeout) {

    const main = this;
    // main.students = StudentFactory.returnStudentData();

    StudentFactory.returnStudentData().then((res) => {
      main.students = res;
      $timeout();
    })

    $scope.picture = true;
  })
