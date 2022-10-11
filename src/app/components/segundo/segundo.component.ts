import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent implements OnInit {

  public inicial : number = 1;
  @Input() valor: number =0
  constructor() { }
  
  ngOnInit(): void {
  }

}
