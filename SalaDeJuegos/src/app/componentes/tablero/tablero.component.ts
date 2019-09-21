import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  @Input() loggedIn;
  
  constructor() { }

  ngOnInit() {
  }

}
