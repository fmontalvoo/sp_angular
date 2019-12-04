import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  private heroes: HeroeModel[];
  private query: string;

  constructor(private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      param => {
        this.query = param['query'];
        this.heroes = this._heroesService.searchHeroe(this.query);
      }
    );
  }

}
