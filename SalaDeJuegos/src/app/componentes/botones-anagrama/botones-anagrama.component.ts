import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-anagrama',
  templateUrl: './botones-anagrama.component.html',
  styleUrls: ['./botones-anagrama.component.scss']
})
export class BotonesAnagramaComponent implements OnInit {

  @Input() mostrarMenu = false;
  @Input() jugarDeNuevoHabilitado = false;
  @Input() siguienteHabilitado = false;
  @Output() siguiente = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Salir() {
    this.router.navigate(['/Juegos']);
  }

  Siguiente() {
    this.siguiente.emit();
  }
}
