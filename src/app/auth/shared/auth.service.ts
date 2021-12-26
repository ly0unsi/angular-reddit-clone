import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signupRequestPayoad';
import { map, Observable } from 'rxjs';
import { LoginRequestPayload } from '../login/loginRequestPayload';
import { LoginResponse } from '../login/LoginResponsePayload';
import { LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private localStorage:LocalStorageService) { }
  signup(signupRequestPayoad:SignupRequestPayload):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/signup',signupRequestPayoad,{responseType:'text'})
  }
  login(loginRequestPayload:LoginRequestPayload):Observable<boolean>{
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login',loginRequestPayload)
    .pipe(map(data=>{
      this.localStorage.store('authenticationToken', data.authenticationToken);
      this.localStorage.store('username', data.username);
      this.localStorage.store('refreshToken', data.refreshToken);
      this.localStorage.store('expiresAt', data.expiresAt);
      return true;
    })
    )
  }
}
