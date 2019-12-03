import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-solucion-anagrama',
  templateUrl: './solucion-anagrama.component.html',
  styleUrls: ['./solucion-anagrama.component.scss']
})
export class SolucionAnagramaComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<string>();
  palabraSolucion;

  constructor() { }

  ngOnInit() {
    
  }

  focusOutFunction(){
    this.propagar.emit(this.palabraSolucion);
  }

}
