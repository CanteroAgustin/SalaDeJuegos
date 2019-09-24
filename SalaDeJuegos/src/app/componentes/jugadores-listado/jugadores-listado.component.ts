import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: any

  constructor(private usuarioService: UsuarioService) {

  }



  ngOnInit() {
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

}
