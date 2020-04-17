import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'], 
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;
  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.titulo= "Películas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha= new Date(2020,8,12);
  }

  ngOnInit(): void {
    console.log("Componente cargado");
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(){

    console.log("Do check lanzado")
  }
  cambiarTitulo(){
    this.titulo= "El título ha sido cambiado";

  }
  ngOnDestroy(){
    console.log("El componente se va a eliminar")
  }
  MostrarFavorita(event){
    this.favorita= event.pelicula;
  }
}
