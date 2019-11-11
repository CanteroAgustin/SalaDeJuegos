import { log } from 'util';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'responseType': 'text' })
};

@Injectable()
export class MiHttpService {

  constructor(public http: HttpClient) { }

  public httpGetP(url: string) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http.post(url, objeto, {responseType: 'text'});
  }

  public httpPut(url: string, objeto: any) {
    return this.http.put(url, objeto, {responseType: 'text'});
  }

  public httpGetO(url: string) {
    return this.http.get(url);
  }


  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
