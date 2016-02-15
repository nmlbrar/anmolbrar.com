
var MessageApp = angular.module("MessageApp",[
   "ngRoute", 
]);

MessageApp.config([
   "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
       $routeProvider.when(
            "/message", //name for the route
            {
                templateUrl:"view/amsg.html"
            }
       ).when(
            "/user",
            {
                templateUrl:"user.html"
            }
       ).when(
            "/send",
            {
                templateUrl:"message.html"
            }
       ).otherwise(
           
           {
               templateUrl:"home.html",
              
           }
       )
   } 
]);

