import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
    export class MiComponente{

        public titulo: string;
        public comentario: string;
        public year: number;
        constructor () {
            this.titulo= "Hola mundo, soy MI COMPONENTE";
            this.comentario = "Este es realmente mi primer componente";
            this.year= 2020;
            console.log (this.titulo,this.comentario, this.year);
            console.log("Mi componente cargado");
        }
    }