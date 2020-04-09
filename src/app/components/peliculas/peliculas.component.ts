import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  constructor() { 
    this.titulo= "Pulsa el boton de abajo";
    console.log("CONSTRUCTOR LANZADO");
  }

  ngOnInit(): void {
    console.log("Componente cargado");
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
}
