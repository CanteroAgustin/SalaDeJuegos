import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RegistroDialogComponent } from '../registro-dialog/registro-dialog.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  loginForm;
  nombre;
  constructor(private dialog: MatDialog, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuarioService.getUsuarios();
    this.loginForm = this.formBuilder.group({
      nombre: ['', Validators.required],
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
