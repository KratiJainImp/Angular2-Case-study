/**
 * Created by abc on 16-Jul-16.
 */
import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router';


import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
    <h1>Component Router</h1>
  <nav>
    <a [routerLink]="['login']">Crisis Center</a>
    <a [routerLink]="['contact']">Heroes</a>
  </nav>

`,
    directives:[ROUTER_DIRECTIVES]


})
@RouteConfig([
    { path : 'login', component : 'LoginComponent'},
    {path : 'hero',component: 'HeroesComponent'}
])

export class AppComponent {
    title = 'Tour of Heroes';
}
