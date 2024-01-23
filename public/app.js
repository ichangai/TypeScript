"use strict";
// Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
var payOne = {
    uid: 1,
    resourceName: 'Icha',
    data: { name: 'shaun' }
};
var payTwo = {
    uid: 1,
    resourceName: 'Icha',
    data: ['mk1', 'Fifa']
};
