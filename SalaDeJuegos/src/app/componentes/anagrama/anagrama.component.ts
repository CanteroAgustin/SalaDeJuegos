import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from 'src/app/clases/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  mostrarMenu = false;
  jugarDeNuevoHabilitado = false;
  siguienteHabilitado = false;
  contadorPalabrasMostradas = 0;
  mostrarPlay = true;
  enJuego = true;
  private palabras;
  private palabra: string;
  private solucion: string;
  private puntos: number = 0;
  private indicePalabra: number = 0;
  private jugador: Usuario;
  palabraSolucion;
  private intentos = 3;

  constructor(private router: Router, private usuarioService: UsuarioService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.palabras = [
      {
        'pregunta': "Amor",
        'respuesta': "roma"
      },
      {
        'pregunta': "Aires",
        'respuesta': "Aries"
      },
      {
        'pregunta': "Banjo",
        'respuesta': "Jabon"
      },
      {
        'pregunta': "Caido",
        'respuesta': "Acido"
      },
      {
        'pregunta': "Actinio",
        'respuesta': "Noticia"
      },
      {
        'pregunta': "Alcino",
        'respuesta': "Colina"
      },
      {
        'pregunta': "Armable",
        'respuesta': "Alambre"
      },
      {
        'pregunta': "Carreta",
        'respuesta': "Cartera"
      },
      {
        'pregunta': "Centraron",
        'respuesta': "Encontrar"
      },
      {
        'pregunta': "Certificable",
        'respuesta': "Rectificable"
      },
      {
        'pregunta': "Cuaderno",
        'respuesta': "Educaron"
      },
    ];

    this.palabras = this.doShuffle(this.palabras);
    this.palabra = this.palabras[this.indicePalabra].pregunta;
    this.jugador = JSON.parse(this.usuarioService.getUsuarioLogeadoCompleto());
  }

  play() {
    this.mostrarPlay = false;
    this.enJuego = true;
  }

  comprobar() {

    this.contadorPalabrasMostradas += 1;

    if (this.contadorPalabrasMostradas < 10 && this.contadorPalabrasMostradas > 0) {
      this.mostrarMenu = true;
      this.siguienteHabilitado = true;
    }

    console.log("Comprobando palabra: " + this.palabraSolucion);
    this.palabra = this.palabra.toLowerCase();
    this.palabraSolucion = (this.palabraSolucion != undefined) ? this.palabraSolucion.toLowerCase() : this.palabraSolucion;
    let snackMsj = "";
    let usuario: Usuario = JSON.parse(this.usuarioService.getUsuarioLogeadoCompleto());
    if (this.palabra === this.palabraSolucion) {
      this.puntos += 1;
      console.log("Acerto!!! El anagrama es correcto.");
      if (this.contadorPalabrasMostradas >= 10) {
        this.jugarDeNuevoHabilitado = true;
        this.siguienteHabilitado = false;
      }
    } else {
      if (this.intentos > 1) {
        this.intentos = this.intentos - 1;
        console.log("Erro!!! El anagrama no es correcto.");
        snackMsj = "Cerca, pero no. Proba de nuevo, te quedan " + this.intentos + " intentos.";
        this._snackBar.open(snackMsj, 'Cerrar');
      } else {
        this.cambiarPalabra();
        this.intentos = 3;
        snackMsj = "Mmmm, estas manqueando mal, probemos con otra.";
        this._snackBar.open(snackMsj, 'Cerrar');
      }

    }

    /*
        if (usuario.anagrama < this.puntos) {
          this.usuarioService.saveScore(this.jugador.id, null, null, null, null, this.puntos).subscribe(data => {
            console.log(JSON.stringify(data));
          });
          snackMsj = "Felicitaciones!!! Acabas de superar tu propio record. Ahora tu puntaje es: " + this.puntos;
        } else {
          snackMsj = "Esta vez no alcanzo, tu puntaje anterior fue: " + usuario.anagrama;
        }
        this._snackBar.open(snackMsj, 'Cerrar');*/


  }

  procesarSiguiente(){
    this.cambiarPalabra();
  }

  cambiarPalabra(){
    this.indicePalabra += 1;
    this.palabra = this.palabras[this.indicePalabra].pregunta;
  }

  procesaPropagar(mensaje) {
    console.log("Se recibio la palabra: " + mensaje);
    this.palabraSolucion = mensaje;
  }

  doShuffle(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  calcularPuntos() {
    let snackMsj = "";
    let usuario: Usuario = JSON.parse(this.usuarioService.getUsuarioLogeadoCompleto());
    if (usuario.trivia < this.puntos) {
      this.usuarioService.saveScore(this.jugador.id, this.puntos, null, null, null, null).subscribe(data => {
        console.log(JSON.stringify(data));
      });
      snackMsj = "Felicitaciones!!! Acabas de superar tu propio record. Ahora tu puntaje es: " + this.puntos;
    } else {
      snackMsj = "Esta vez no alcanzo, tu puntaje anterior fue: " + usuario.trivia;
    }
    this._snackBar.open(snackMsj, 'Cerrar');
  }

}
