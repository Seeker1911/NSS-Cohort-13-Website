angular.module('lucky-13')
  .filter('lengthFilter', function() {
    return function(title) {
      if (title.length > 23) {
      sliced_string = title.slice(0, 20);
      new_title = sliced_string + '...';
      return new_title;
    } else {
      return title;
    }
    }
  })
