/**
 * Created by abc on 16-Jul-16.
 */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import {Hero} from "../hero";




@Component({
    selector: 'my-dashboard',
    template: `<h3>My Dashboard</h3>
                   <ul>
                   <li *ngFor="let hero of heroes">{{hero.name}}</li>
</ul> `,
    providers :[HeroService]
})
export class DashboardComponent implements OnInit{

    private heroes:Hero[];
    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }


    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    gotoDetail(){

    }

}
