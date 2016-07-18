/**
 * Created by abc on 16-Jul-16.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';



@Component({
    selector: 'my-dashboard',
    template: '<h3>My Dashboard</h3>',
    providers :[HeroService]
})
export class DashboardComponent {
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

}
