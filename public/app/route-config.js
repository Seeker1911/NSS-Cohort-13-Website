angular.module('lucky-13')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
        studentData: function(StudentFactory) {
          return StudentFactory.getStudentData();
        }
      }
      })
  })
