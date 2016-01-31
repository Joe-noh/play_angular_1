let playController = ($scope) => {
  $scope.person = {
    firstName: "John",
    lastName:  "Doe",
    fullName: () => {
      return `${$scope.person.firstName} ${$scope.person.lastName}`;
    }
  };

  $scope.numbers = [1, 2, 4, 8, 16];
};

export default playController;
