import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import {ContactsComponent} from './Contact/contacts.component'
import {DashboardComponent} from './Dashboard/hero.dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {LoginComponent} from './Login/login.component';

const routes:RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
