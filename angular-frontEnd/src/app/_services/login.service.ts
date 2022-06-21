import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';


const baseUrl = `${environment.apiUrl}/api/login`;

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(private http: HttpClient) { }

  

    login(params: any) {
        return this.http.post(baseUrl, params);
    }

 
}