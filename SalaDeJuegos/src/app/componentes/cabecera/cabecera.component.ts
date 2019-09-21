import { Component, OnInit, Input,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() loggedIn;

  @Output()
  logOut = new EventEmitter<boolean>();

  constructor() { 
  }

  ngOnInit() {
  }

  cerrar(){
    this.logOut.emit(true);
  }


}
