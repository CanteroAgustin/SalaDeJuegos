import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from 'src/app/clases/usuario';

const JUEGO_ID: number = 1;

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    private preguntas;
    private pregunta: string;
    private r1;
    private r2;
    private r3;
    private res1: string;
    private res2: string;
    private res3: string;
    private puntos: number = 0;
    private disable: boolean = false;
    private indicePregunta: number = 0;
    private mostrarPreguntas = false;
    private playOk = true;
    private prox = false;
    private fin = false;
    private jugador: Usuario; ;

    constructor(private router: Router, private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.preguntas = [
            {
                'pregunta': "¿Cual es el lenguaje que ha revolucionado la web?",
                respuestas: {
                    a: {
                        desc: "Javascript", val: true
                    },
                    b: {
                        desc: "PHP", val: false
                    },
                    c: {
                        desc: "Python", val: false
                    },
                }
            },
            {
                'pregunta': "¿5 + 5?",
                respuestas: {
                    a: {
                        desc: "1", val: false
                    },
                    b: {
                        desc: "10", val: true
                    },
                    c: {
                        desc: "20", val: false
                    },
                }
            },
            {
                'pregunta': "¿Cuál es el código ASCII decimal de la letra A mayúscula?",
                respuestas: {
                    a: {
                        desc: "32", val: false
                    },
                    b: {
                        desc: "65", val: true
                    },
                    c: {
                        desc: "97", val: false
                    },
                }
            },
            {
                'pregunta': "¿int, char, float, string y boolean son?",
                respuestas: {
                    a: {
                        desc: "Funciones de acceso a datos.", val: false
                    },
                    b: {
                        desc: "Sentencias de control.", val: false
                    },
                    c: {
                        desc: "Tipos de datos.", val: true
                    },
                }
            },
            {
                'pregunta': "Qué significa EOF?",
                respuestas: {
                    a: {
                        desc: "Empty or full", val: false
                    },
                    b: {
                        desc: "End of file", val: true
                    },
                    c: {
                        desc: "End of floop", val: false
                    },
                }
            },
            {
                'pregunta': "¿Cuál de los siguientes es un IDE de programación?",
                respuestas: {
                    a: {
                        desc: "Eclipse", val: true
                    },
                    b: {
                        desc: "FTP", val: false
                    },
                    c: {
                        desc: "Notepad++", val: false
                    },
                }
            },
            {
                'pregunta': "¿Que es un algoritmo?",
                respuestas: {
                    a: {
                        desc: "La idea que sustenta un programa.", val: true
                    },
                    b: {
                        desc: "El valor que se obtiene de la información.", val: false
                    },
                    c: {
                        desc: "Un lenguaje de programación.", val: false
                    },
                }
            },
            {
                'pregunta': "¿Que extension tiene un clase java compilada?",
                respuestas: {
                    a: {
                        desc: ".java", val: false
                    },
                    b: {
                        desc: ".class", val: true
                    },
                    c: {
                        desc: ".hex", val: false
                    },
                }
            },
            {
                'pregunta': "¿Cuál es el siguiente paso después de plantear el algoritmo y el pseudocódigo?",
                respuestas: {
                    a: {
                        desc: "Escribirlo en un lenguaje de programacion.", val: true
                    },
                    b: {
                        desc: "Escribirlo en lenguaje de maquina.", val: false
                    },
                    c: {
                        desc: "Escribirlo en codigo de lenguaje.", val: false
                    },
                }
            },
            {
                'pregunta': "¿Cada repetición del cuerpo del bucle se denomina?",
                respuestas: {
                    a: {
                        desc: "Retroalimentacion.", val: false
                    },
                    b: {
                        desc: "Iteracion.", val: true
                    },
                    c: {
                        desc: "Compilacion.", val: false
                    },
                }
            },
            {
                'pregunta': "¿La sentencia case se utiliza para?",
                respuestas: {
                    a: {
                        desc: "Elegir entre las mismas alternativas.", val: false
                    },
                    b: {
                        desc: "Para convertir datos constantes a variables.", val: false
                    },
                    c: {
                        desc: "Elegir entre diferentes alternativas.", val: true
                    },
                }
            },
        ]
        this.preguntas = this.doShuffle(this.preguntas);
        this.pregunta = this.preguntas[this.indicePregunta].pregunta;
        this.r1 = this.preguntas[this.indicePregunta].respuestas.a;
        this.r2 = this.preguntas[this.indicePregunta].respuestas.b;
        this.r3 = this.preguntas[this.indicePregunta].respuestas.c;

        this.jugador = JSON.parse(this.usuarioService.getUsuarioLogeadoCompleto())
    }

    play() {
        this.mostrarPreguntas = true;
        this.playOk = false;
    }

    validarRespuesta(datos) {
        this.disable = true;
        this.prox = true;
        if (datos.val) {
            this.puntos += 1;
            this.mostrarCorrecta(datos);
        } else {
            this.mostrarTodo(datos);
        }
        console.log(datos);
    }

    mostrarCorrecta(correcta) {
        if (correcta === this.r1) {
            this.res1 = 'correcta';
        } else if (correcta === this.r2) {
            this.res2 = 'correcta';
        } else {
            this.res3 = 'correcta';
        }
    }

    mostrarTodo(incorrecta) {
        if (incorrecta === this.r1) {
            this.res1 = 'incorrecta';
        } else if (incorrecta === this.r2) {
            this.res2 = 'incorrecta';
        } else {
            this.res3 = 'incorrecta';
        }

        if (this.r1.val) {
            this.res1 = 'correcta';
        } else if (this.r2.val) {
            this.res2 = 'correcta';
        } else {
            this.res3 = 'correcta';
        }
    }

    next() {
        this.indicePregunta += 1;
        if (undefined != this.preguntas[this.indicePregunta]) {
            this.pregunta = this.preguntas[this.indicePregunta].pregunta;
            this.r1 = this.preguntas[this.indicePregunta].respuestas.a;
            this.r2 = this.preguntas[this.indicePregunta].respuestas.b;
            this.r3 = this.preguntas[this.indicePregunta].respuestas.c;
            this.disable = false;
            this.res1 = "";
            this.res2 = "";
            this.res3 = "";
        } else {
            this.fin = true;
            this.prox = false;
            this.calcularPuntos();
        }

    }

    Otra() {
        this.preguntas = this.doShuffle(this.preguntas);
        this.indicePregunta = 0;
        this.pregunta = this.preguntas[this.indicePregunta].pregunta;
        this.r1 = this.preguntas[this.indicePregunta].respuestas.a;
        this.r2 = this.preguntas[this.indicePregunta].respuestas.b;
        this.r3 = this.preguntas[this.indicePregunta].respuestas.c;
        this.puntos = 0;
        this.disable = false;
        this.res1 = "";
        this.res2 = "";
        this.res3 = "";
        this.prox = false;
        this.fin = false;
    }

    Terminar() {
        this.Otra();
        this.mostrarPreguntas = false;
        this.playOk = true;
    }

    Salir() {
        this.router.navigate(['/Juegos']);
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
        this.usuarioService.saveScore(this.jugador.id, this.puntos, null, null, null, null).subscribe(data =>{
            console.log(JSON.stringify(data));
        });
    }
}
