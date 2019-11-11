import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  listado: any;
  loggedIn = false;
  userName = "";

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {
    let logeado = this.usuarioService.getUsuarioLogeado();
    if (logeado) {
      this.loggedIn = true;
      this.userName = logeado;
    }
    this.TraerTodos();
  }

  TraerTodos() {
    //alert("totos");
    //this.miJugadoresServicio.traertodos('jugadores/','todos').then(data=>{
    //console.info("jugadores listado",(data));
    //this.listado= data;
    //})
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.listado = usuarios;
    });

  }

  ver() {
    console.info(this.listado);
  }

  procesarCerrar(){
    this.loggedIn = false;
    this.usuarioService.deslogear();
    this.router.navigate(['/Principal']);
  }
}
