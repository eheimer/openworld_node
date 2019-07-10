"use strict";
exports.__esModule = true;
var OWModelService = (function () {
    function OWModelService() {
    }
    OWModelService.prototype.modelEquals = function (object1, object2) {
        for (var propName in object1) {
            if (object1.hasOwnProperty(propName) !== object2.hasOwnProperty(propName)) {
                return false;
            }
            else if (typeof object1[propName] !== typeof object2[propName]) {
                return false;
            }
        }
        for (propName in object2) {
            if (object1.hasOwnProperty(propName) !== object2.hasOwnProperty(propName)) {
                return false;
            }
            else if (typeof object1[propName] !== typeof object2[propName]) {
                return false;
            }
            if (!object1.hasOwnProperty(propName)) {
                continue;
            }
            if (object1[propName] instanceof Array && object2[propName] instanceof Array) {
                if (!object1[propName].equals(object2[propName])) {
                    return false;
                }
            }
            else if (object1[propName] instanceof Object && object2[propName] instanceof Object) {
                if (!object1[propName].equals(object2[propName])) {
                    return false;
                }
            }
            else if (object1[propName] !== object2[propName]) {
                return false;
            }
        }
        return true;
    };
    return OWModelService;
}());
exports.OWModelService = OWModelService;
;
module.exports = new OWModelService();
