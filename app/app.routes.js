"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var contacts_component_1 = require('./Contact/contacts.component');
var hero_dashboard_component_1 = require('./Dashboard/hero.dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var login_component_1 = require('./Login/login.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'contacts',
        component: contacts_component_1.ContactsComponent
    },
    {
        path: 'dashboard',
        component: hero_dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map