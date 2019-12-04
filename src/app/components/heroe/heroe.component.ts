import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  private heroe: HeroeModel;

  constructor(private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      param => {
        this.heroe = _heroesService.getHeroe(param['id']);
      }
    );

  }

  ngOnInit() {
  }

}
