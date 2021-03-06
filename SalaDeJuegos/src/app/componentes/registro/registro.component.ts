import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RegistroDialogComponent } from '../registro-dialog/registro-dialog.component';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  loginForm;
  nombre;
  loggedIn = false;
  fileToUpload: File = null;
  fd = new FormData();
  registrado = false;
  
  constructor(private dialog: MatDialog, private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    private router: Router) {
    this.usuarioService.getUsuarios();
    this.loginForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      userName: '',
      password: '',
      email: '',
      foto: '',
    });
  }

  ngOnInit() {
    this.openDialog();
  }

  onSubmit(loginData) {
    console.info('Datos ingresados en el registro: ', JSON.stringify(loginData));

    this.usuarioService.registrarUsuario(loginData).subscribe(datos => {
      this.usuarioService.loginEnBackend(loginData).subscribe(() => {
        console.info("Registro completo...");
        this.registrado = true;
      });
    }, error => {
      console.log("Ocurrio un error en el registro: "+error);
      this.router.navigate(['/error']);
    })
  }

  irAlLogin(){
    this.router.navigate(['/Login']);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(RegistroDialogComponent, dialogConfig);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
