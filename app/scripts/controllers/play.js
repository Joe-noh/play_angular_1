var playController = function($scope) {
  $scope.person = {
    firstName: "John",
    lastName:  "Doe",
    fullName: function() {
      return $scope.person.firstName + " " + $scope.person.lastName;
    }
  };

  $scope.numbers = [1, 2, 4, 8, 16];
};

module.exports = playController;
