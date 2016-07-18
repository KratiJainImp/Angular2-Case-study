/**
 * Created by abc on 16-Jul-16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
@Component({
    selector: 'my-app',
    template: `
    <div class="container main-div">
    <h1>{{title}}</h1>
    <div class="alert col-md-12" role="alert">
        <a href="#" class="alert-link"></a>
    </div>
    <div class="col-md-12">
        <a [routerLink]="['/heroes']">Heroes</a>
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/contacts']">Contacts</a>
      <a [routerLink]="['/login']">Login</a>
    <router-outlet></router-outlet>
    </div>


</div>
   
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}

