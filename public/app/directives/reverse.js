/**
 * Created by Админ on 07.02.2016.
 */
angular.module('reverseDirective', [])

.filter('reverse', function () {
        return function (items) {
            return items.slice().reverse();
        };
    });