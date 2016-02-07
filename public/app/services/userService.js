angular.module('userService', [])


.factory('User', function($http) {

        var userFactory = {};

        userFactory.create = function (userData) { // 'userFactory.create' overrides method in Object (EcmaScript5.js)
            return $http.post('/api/signup', userData);
        };

        userFactory.all = function () {
            return $http.get('/api/users');
        };

        return userFactory;
    });