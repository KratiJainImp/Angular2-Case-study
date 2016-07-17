import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import {ContactsComponent} from 'app/Contacts/contacts.component'

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
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
