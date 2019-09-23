import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  loggedIn = false;
  userName = "";

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    let logeado = this.usuarioService.getUsuarioLogeado();
    if (logeado) {
      this.loggedIn = true;
      this.userName = logeado.userName;
    }
  }

  procesarCerrar(){
    this.loggedIn = false;
    this.usuarioService.deslogear();
  }


}
