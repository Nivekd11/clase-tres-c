
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.scss']
})
export class TerceroComponent implements OnInit {

  @Output() salida : EventEmitter<any> =  new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("click")
    this.salida.emit("hola")
  }

  

}
