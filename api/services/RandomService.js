"use strict";
exports.__esModule = true;
var OWRandomService = (function () {
    function OWRandomService() {
    }
    OWRandomService.prototype.getRandomInRange = function (arg1, arg2) {
        var arr = arg1.constructor === Array;
        if (arguments.length === 1) {
            if (!arr) {
                arg1 = arg1;
                var s = arg1.split('-');
                if (s.length > 1) {
                    var n = [];
                    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
                        var item = s_1[_i];
                        n.push(Number.parseInt(item));
                    }
                    return this.getRandomInRange(n);
                }
                else {
                    if (arg1 === '') {
                        return 0;
                    }
                    return Number.parseInt(arg1);
                }
            }
            else {
                arg1 = arg1;
                if (arg1.length === 1) {
                    return arg1[0];
                }
                else if (arg1.length > 1) {
                    return this.getRandomInRange(arg1[0] * 1, arg1[1] * 1);
                }
                else {
                    return 0;
                }
            }
        }
        arg1 = arg1;
        arg2 = arg2;
        if (arg1 === arg2)
            return arg1;
        var min = Math.min(arg1, arg2);
        var max = Math.max(arg1, arg2);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    OWRandomService.prototype.weightedRandom = function (weights) {
        var sumOfWeight = 0;
        for (var i = 0; i < weights.length; i++) {
            sumOfWeight += weights[i];
        }
        var rnd = Math.floor(Math.random() * sumOfWeight);
        for (i = 0; i < weights.length; i++) {
            if (rnd < weights[i]) {
                return i;
            }
            rnd -= weights[i];
        }
    };
    OWRandomService.prototype.getRandomItems = function (arr, count, weights, dispose) {
        if (dispose === void 0) { dispose = true; }
        var items = [];
        count = count ? count : 1;
        for (var i = 0; i < count; i++) {
            var choose;
            if (weights) {
                choose = this.weightedRandom(weights);
                if (dispose) {
                    weights.splice(choose, 1);
                }
            }
            else {
                choose = this.getRandomInRange(0, arr.length - 1);
            }
            var item = arr[choose];
            if (dispose) {
                arr.splice(choose, 1);
            }
            items.push(item);
        }
        return items;
    };
    OWRandomService.prototype.getOneRandomItem = function (arr, weights, dispose) {
        if (dispose === undefined) {
            dispose = true;
        }
        return this.getRandomItems(arr, 1, weights, dispose)[0];
    };
    return OWRandomService;
}());
exports.OWRandomService = OWRandomService;
;
module.exports = new OWRandomService();
