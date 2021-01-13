import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(
        private http: HttpClient,
        public jwtHelper: JwtHelperService
    ) { }

    public logout(){
        localStorage.removeItem('token');
        const body = { message : "user logged out" };
        return body;
     }
    public isAuthenticated(): boolean {
        const token: any = localStorage.getItem('token');
         return !this.jwtHelper.isTokenExpired(token);
    }

    getUsers(params = {}) {
        return this.http.get(environment.api_url + "api/user", params);
    }
    getTasks(params ={}){
        return this.http.get(environment.api_url + "api/task",  {params: params});
    }
    totalTask(params = {}){
        return this.http.get(environment.api_url + "api/task/totaltasks",  params);
    }
    login(params = {}) {
        return this.http.post(environment.api_url + "login", params)
    }
    saveTask(params: any) {
        return this.http.post(environment.api_url + "api/task", params)
    }

}