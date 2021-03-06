/**
 * Created by abc on 16-Jul-16.
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}
