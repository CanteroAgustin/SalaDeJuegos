import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RegistroDialogComponent } from '../registro-dialog/registro-dialog.component';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  loginForm;
  nombre;
  loggedIn = false;

  constructor(private dialog: MatDialog, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuarioService.getUsuarios();
    this.loginForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      userName: '',
      password: '',
      rol: '',
      documento: '',
      foto: '',
    });
  }

  ngOnInit() {
    this.openDialog();
  }

  onSubmit(loginData) {
    // Process checkout data here
    console.info('Datos ingresados en el login: ', loginData);
    this.usuarioService.registrarUsuario(loginData);

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
}
