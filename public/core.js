// Controller for INDEX.HTML
var demoApp = angular.module('demoApp', []);

demoApp.controller('controllerIndex',function($scope, $http,$window){
	
	// when landing on the page, get all Contacts and show them
	$scope.isContacts=true;
	$http.get('/api/getContacts')
		.success(function(data) {
			$scope.contactList = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.loadContacts = function(){
	 $scope.isContacts=true;
   	 $http.get('/api/getContacts')
		.success(function(data) {
			$scope.contactList = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
    }.bind(this);

    $scope.loadMessages = function(){
     $scope.isContacts=false;
     $http.get('/api/getMessages')
		.success(function(data) {
			$scope.messageList = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
    }.bind(this);

    $scope.openContactInfo = function(Id) {
      $window.location.href = "contactInfo.html?"+Id;
    };  
});

// Controller for ContactsInfo page
var appInfo = angular.module('demoContactInfo', []);

appInfo.controller('controllerContactInfo', function($scope,$http,$window) {

	var contactId=window.location.href.split('?')[1]; //Getting contactId
	var url='/api/getContacts/' +contactId;

	$http.get(url)
		.success(function(data) {
			$scope.contactInfo = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

     $scope.sendMessage=function(){
        $window.location.href = "sendMessage.html?"+contactId;
    }
 });


// Controller for Message Log page
var appMessage = angular.module('demoSendMessage', []);

appMessage.controller('controllerSendMessage', function($scope,$http,$window) {

    var contactId=window.location.href.split('?')[1]; //Getting contactId

    $scope.randomOTP=Math.floor((Math.random() * 900000) + 100000);   //Generating random six digit OTP.
            
    var dataObj={'contactId':contactId,'randomOTP':$scope.randomOTP};
    $scope.confirm=function(){
    	var url='/api/sendOTPs';

    	$http.post(url,dataObj)
			.success(function(data){
				window.alert('Sending OTP is SUCCESS!');				
			})
			.error(function(data) {
				window.alert('Sending OTP FAILED!');
			});
        $window.location.href = "index.html";
    }.bind(this);

 });