import { Injectable } from "@angular/core";
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas : Pelicula[];

    constructor(){
        this.peliculas =[
            new Pelicula("Spiderman 4",2019,"https://media.biobiochile.cl/wp-content/uploads/2019/10/sensual-spiderman.jpg"),
            new Pelicula("Vengadores",2009,"https://mouse.latercera.com/wp-content/uploads/2019/11/avengers-chilenos.jpg"),
            new Pelicula("Batman vs Súperman",2004,"https://lh4.googleusercontent.com/-9nGDWeQWVOU/VGUtf3N8eVI/AAAAAAAAAOg/rZtWA1bJq7Q/s1600/bachelet%2Bsuperman.jpg")
          ];
    }

    holaMundo(){
        return "Hola mundo desde un servicio de Angular";
    }
    getPeliculas(){
        return this.peliculas;
    }
}