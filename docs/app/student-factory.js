angular.module('lucky-13')
  .factory('StudentFactory', function($http) {

  studentData = {}
  const getStudentData = $http.get('students.json')

  return {
    // getStudentData: () => {
    //   $http.get('students.json')
    //     .then((res) => {
    //       studentData = res.data.students;
    //     })
    // },

    returnStudentData: () => {
      return getStudentData.then(res => res.data.students)
    }
  }
})
