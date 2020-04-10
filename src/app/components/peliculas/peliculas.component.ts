import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  constructor() { 
    this.titulo= "Películas";
    this.peliculas = [
      new Pelicula("Spiderman 4",2019,"https://media.biobiochile.cl/wp-content/uploads/2019/10/sensual-spiderman.jpg"),
      new Pelicula("Vengadores",2009,"https://mouse.latercera.com/wp-content/uploads/2019/11/avengers-chilenos.jpg"),
      new Pelicula("Batman vs Súperman",2005,"https://lh4.googleusercontent.com/-9nGDWeQWVOU/VGUtf3N8eVI/AAAAAAAAAOg/rZtWA1bJq7Q/s1600/bachelet%2Bsuperman.jpg")
    ]
  }

  ngOnInit(): void {
    console.log("Componente cargado");
    console.log(this.peliculas);
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
