angular.module('StudentFactory', function($http) {

  studentData = {}

  return {
    getStudentData: () => {
      return $http.get('students.json')
        .then((res) => {
          studentData = res;
        })
    }
  }
})
