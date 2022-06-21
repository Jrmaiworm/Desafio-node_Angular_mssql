import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Costumer} from '@app/_models';

const baseUrl = `${environment.apiUrl}/costumers`;

@Injectable({ providedIn: 'root' })
export class CostumerService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Costumer[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Costumer>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}