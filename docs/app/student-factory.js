angular.module('lucky-13')
  .factory('StudentFactory', function($http) {

  studentData = {}

  return {
    getStudentData: () => {
      $http.get('students.json')
        .then((res) => {
          studentData = res.data.students;
        })
    },

    returnStudentData: () => {
      return studentData;
    }
  }
})
