import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from './auth.service';
// import {serverApiUrl} from '../data/environment';
declare var alertify : any;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient, public auth: AuthService) { }

  // public apiUrl:string =  serverApiUrl;
  public apiUrl:string =  'serverApiUrl';

  public postJson(url: string, data: any): Observable<any> {
    let userInfo:any = this.auth.getUserInfo();
    if(userInfo){
      let userId = userInfo.id;
      data.user_id = userId;
    }
    url = this.apiUrl + url;
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

    return this.http.post(url, data, { headers: httpHeaders, responseType: 'json' }).pipe(catchError(this.handleError));
  }

  public getRequest(url:any, params:any): Observable<any> {
    let userInfo:any = this.auth.getUserInfo();
    if(userInfo){
      let userId = userInfo.id;
      params.user_id = userId;
    }
    let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json');

    let httpParams = new HttpParams();

    url = this.apiUrl + url;

    for (let key in params) {
      let value = params[key];
      httpParams = httpParams.set(key, value);
    }
    return this.http.get(url, { headers: httpHeaders, responseType: 'json', params: httpParams }).pipe(catchError(this.handleError));
  }
  public handleError(error: HttpErrorResponse){
    // alertify.alert(APP_NAME, 'Could not connect to the server at the moment. <br/> Please try again later !');
    alertify.error(error.error.message);
    return throwError(error);
  }

}
