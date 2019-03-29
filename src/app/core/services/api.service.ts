import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
    
    apiRoot: 'https://minha-lista-api.herokuapp.com/api/'

    constructor(private http: HttpClient){}

    private formatErrors(error: any) {
        return  throwError(error.error);
      }

    public getAll(route : string) : Observable<any>{
        console.log(`https://minha-lista-api.herokuapp.com/api/${route}`);
        return this.http.get(`https://minha-lista-api.herokuapp.com/api/${route}`)
            .pipe(catchError(this.formatErrors));
    }
}

