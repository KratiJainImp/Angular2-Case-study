"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by krati.jain on 21-07-2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.userJson = "app/data/userList.json";
    }
    LoginService.prototype.authenticateUser = function (user) {
        this.userCredentials = user;
        console.log("calling authenticate user");
        return this.http.get(this.userJson)
            .map(this.validateUser)
            .catch(this.handleError);
    };
    LoginService.prototype.validateUser = function (res) {
        var _this = this;
        var ifUserValid = false;
        var allUsersCredentials = res.json();
        allUsersCredentials.forEach(function (user) {
            if (user.username == _this.userCredentials.username && user.password == _this.userCredentials.password) {
                ifUserValid = true;
            }
        });
        return ifUserValid;
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
// return true;
/*return this.http.get(this.userJson)
 .toPromise()
 .then(response => console.log("response is ",response))
 .catch(this.handleError);*/ 
//# sourceMappingURL=login.service.js.map