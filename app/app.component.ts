/**
 * Created by abc on 16-Jul-16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['/heroes']">Heroes</a>
    <a [routerLink]="['/contacts']">Contacts</a>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}

