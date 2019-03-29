import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class ApiService {
    
    apiRoot: 'https://minha-lista-api.herokuapp.com/api/'

    constructor(private http: HttpClient){}

    private formatErrors(error: any) {
        return  throwError(error.error);
      }

    public getAll(route : string) : Observable<any>{
        return this.http.get(`${environment.apiUrl}${route}`)
            .pipe(catchError(this.formatErrors));
    }

    public delete(route : string, id : number) : Observable<any>{
        return this.http.delete(`${environment.apiUrl}${route}/${id}`)
        .pipe(catchError(this.formatErrors));
    }
}

