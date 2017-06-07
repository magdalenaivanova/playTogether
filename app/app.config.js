'use strict';
    angular
        .module('playTogether')
        .controller('AppCtrl', ['$scope', '$state', '$uibModal', function ($scope, $state, $uibModal) {

       $scope.alertss = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'login/registerModal.html',
        controller: 'RegisterModalCtrl',
        size: 'md',
        backdrop: 'static',
      });
      modalInstance.result.then(function (response) {
        console.log("Modal closed " + response)
      }, function (response) {
        // toastr.clear();
        console.log("Modal closed " + response);
      })
    }
 }]);