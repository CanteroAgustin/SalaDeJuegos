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

  constructor(private dialog: MatDialog, private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    private router: Router) {
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
    console.info('Datos ingresados en el login: ', loginData)
    this.fd.append('image', this.fileToUpload, this.fileToUpload.name);
    this.usuarioService.cargarFoto(this.fd).subscribe(data=>{
      console.log("Se guardo la imagen en: "+data);
      loginData.foto = data['path'];
      this.usuarioService.registrarUsuario(loginData).subscribe(datos => {
        this.usuarioService.loggear(loginData.userName, loginData.password).then(data =>{
          this.router.navigate(['/Principal']);
        });
      });   
    });
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
