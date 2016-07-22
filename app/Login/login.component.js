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
 * Created by abc on 17-Jul-16.
 */
var core_1 = require('@angular/core');
var login_service_1 = require('./login.service');
var router_1 = require('@angular/router');
//import { NgForm }    from '@angular/forms';
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.userDetails = new UserCredential();
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.info("Heyoo..!! Am login");
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("no submit");
        this.ifUserValid = this.loginService.authenticateUser(this.userDetails);
        this.loginService.authenticateUser(this.userDetails)
            .subscribe(function (ifValid) { return _this.ifUserValid = ifValid; }, function (msg) { return _this.errorMessage = msg; });
    };
    Object.defineProperty(LoginComponent.prototype, "diagonostic", {
        get: function () {
            return JSON.stringify(this.userDetails);
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var UserCredential = (function () {
    function UserCredential() {
    }
    return UserCredential;
}());
exports.UserCredential = UserCredential;
//# sourceMappingURL=login.component.js.map