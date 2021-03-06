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
 * Created by abc on 16-Jul-16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div class=\"container page-header\">\n    <div ><span>{{title}}</span></div>\n</div>\n    <div class=\"container main-div\">\n   \n    <div class=\"col-md-12\">\n        <a [routerLink]=\"['/heroes']\">Heroes</a>\n    <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n    <a [routerLink]=\"['/contacts']\">Contacts</a>\n      <a [routerLink]=\"['/login']\">Login</a>\n    <router-outlet></router-outlet>\n    </div>\n\n\n</div>\n   \n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                hero_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map