import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {

  public flag: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(){
    this.flag = !this.flag
  }

  mouseEnter(){
    console.log("Entro")
  }
  validation(event : Event){
    let replace: string = (event.target  as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g,"")
   console.log(event) 
   console.log(event.target)
   console.log((event.target  as HTMLInputElement).value);
   
   (event.target  as HTMLInputElement).value = replace


  }

}
