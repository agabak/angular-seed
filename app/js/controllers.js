'use strict';

/* Controllers */
(function(app){
  
  var myController = function($scopr){
  
   $scope.mydata = 2 + 4;
  };
  
  app.controller('myController ', ['$scope', myController ]) 
  
  }(angular.module('myApp.controllers')))

