import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase-tres-c';
  public valor: number = 0
  incremento(evento: any){
    console.log(evento)
    this.valor++
    
  }
}
