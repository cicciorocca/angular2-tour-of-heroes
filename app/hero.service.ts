// Servizio per i dati //
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';


// Attribute decorator //
@Injectable()
export class HeroService
{
    getHeroes()
    {
        return Promise.resolve(HEROES);
    }

    getHero(id: number)
    {
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id === id));        
    }
}