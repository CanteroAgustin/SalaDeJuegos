import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './servicios/auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authServiceService: AuthServiceService) { }

  canActivate() {
    
      if (!this.authServiceService.isValidToken()) {
          console.log('No estás logueado');
          localStorage.setItem('loggedIn', 'false');
          localStorage.removeItem('usuarioLogeado');
          this.router.navigate(['/']);
          return false;
      }

      return true;
  }

}