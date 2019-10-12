import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: any

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  loggedIn = false;
  userName = "";
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
  TraerGanadores() {
    //this.miJugadoresServicio.traertodos('jugadores/','ganadores').then(data=>{
    //console.info("jugadores listado",(data));
    //this.listado= data;
    //})
  }
  TraerPerdedores() {
    //this.miJugadoresServicio.traertodos('jugadores/','perdedores').then(data=>{
    //console.info("jugadores listado",(data));
    //this.listado= data;
    //})
  }

  procesarCerrar(){
    this.loggedIn = false;
    this.usuarioService.deslogear();
    this.router.navigate(['/Principal']);
  }
}
