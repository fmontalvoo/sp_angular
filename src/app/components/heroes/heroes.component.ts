import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes: HeroeModel[];

  constructor(private _heroesService: HeroesService,
    private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(id: Number) {
    this._router.navigate(['/heroe', id]);
  }

}
