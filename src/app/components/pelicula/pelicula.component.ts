import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
   @Input() pelicula: Pelicula;
   @Input() i: number;
   @Output() MarcarFavorita = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  Seleccionar(event, pelicula): void{
    this.MarcarFavorita.emit({
      pelicula:pelicula

    });
  }

}
