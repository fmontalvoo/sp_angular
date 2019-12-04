import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() private heroe: HeroeModel;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.heroeSeleccionado.emit(this.heroe.id);
  }

}
