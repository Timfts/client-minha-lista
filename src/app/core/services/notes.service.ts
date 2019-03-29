import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable()
export class NotesService {
    constructor(private api : ApiService){}

    getAll() : Observable<Note[]>{
        return this.api.getAll('notes');
    }
}