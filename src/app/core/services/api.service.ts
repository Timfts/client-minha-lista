import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


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

    public insert(route : string, body : Object) : Observable<any>{
        return this.http.post(`${environment.apiUrl}${route}`, 
                JSON.stringify(body), httpOptions)
                .pipe(catchError(this.formatErrors));

    }

    public delete(route : string, id : number) : Observable<any>{
        return this.http.delete(`${environment.apiUrl}${route}/${id}`)
        .pipe(catchError(this.formatErrors));
    }

    public put(route : string, id:number, body : Object) : Observable<any> {
        return this.http.put(`${environment.apiUrl}${route}/${id}`,
                JSON.stringify(body), httpOptions)
                .pipe(catchError(this.formatErrors));
    }
}

