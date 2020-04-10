import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: User;
  public campo: string;
  constructor() { 
    this.user= new User('','','','');
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.user);
  }
  hazDadoClick(): void{
    alert("Haz dado click")
  }
  hazSalido(): void{
    console.log("Haz salido");
  }
  hazPulsadoEnter():void{
    alert("Haz pulsado enter");
  }

}
