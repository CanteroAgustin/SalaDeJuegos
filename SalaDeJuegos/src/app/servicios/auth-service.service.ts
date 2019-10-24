import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

export const TOKEN_NAME: string = 'access_token';
const helper = new JwtHelperService({ throwNoTokenError: true });

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  isTokenExpired() {
    return helper.isTokenExpired(this.getToken());
  }

  getDecodedToken() {
    try {
      return helper.decodeToken(this.getToken());
    } catch (e) {
      return null;
    }
  }

  isValidToken() {
    let result = false

    if (this.getDecodedToken() != null && !this.isTokenExpired()) {
      result = true;
    }

    return result;
  }

}