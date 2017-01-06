"use strict";
var Dao = (function () {
    function Dao() {
        this.tableName = '';
    }
    Dao.prototype.insert = function (object) {
        console.log('inserting');
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log('updating');
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log('deleting');
        return null;
    };
    Dao.prototype.find = function (id) {
        console.log('finding');
        return null;
    };
    Dao.prototype.findAll = function () {
        console.log('findingAll');
        return null;
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map