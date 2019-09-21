import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  loggedIn = false;
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    let loggeado = this.usuarioService.getUsuarioLoggeado();
    if (loggeado) {
      this.loggedIn = true;
    }
  }



}
