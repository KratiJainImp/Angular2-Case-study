"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var contacts_component_1 = require('app/Contacts/contacts.component');
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
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map