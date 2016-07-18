/**
 * Created by abc on 16-Jul-16.
 */
import { Component, OnInit, OnDestroy,Input } from '@angular/core';

import {Hero} from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-hero-detail',
    template: `
     <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
             <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
    <div>Testing irrr</div>
    `
})
export class HeroDetailComponent implements OnInit, OnDestroy{
sub:any;
     ngOnInit() {
         this.sub = this.route.params.subscribe(params => {
             let id = +params['id'];
             this.heroService.getHero(id)
                 .then(hero => this.hero = hero);
         });
    }

     ngOnDestroy() {
         this.sub.unsubscribe();
    }


    @Input()
    hero : Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

}
