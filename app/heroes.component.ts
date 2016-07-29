import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: `app/heroes.component.html`,
  styleUrls: [`app/heroes.component.css`],
  directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
  ngOnInit(){
    this.getHeroes();
  }

  // Costruttore //
  constructor(private router : Router, private heroservice : HeroService)
  {}

  getHeroes(){
      this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
  }

  // Proprietà //
  
  //title = 'Tour of Heroes';
  selectedHero : Hero;
  heroes: Hero[];  

  // Metodi Gestione eventi //
  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }

  gotoDetail()
  {
      this.router.navigate(['/detail', this.selectedHero.id]);
  }
}