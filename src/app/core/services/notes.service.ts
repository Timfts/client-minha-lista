import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class NotesService {
    constructor(private api : ApiService){}

    getAll() : Observable<Note[]>{
        return this.api.getAll('notes');
    }

    addNote(noteFields : Object) : Observable<Note>{
        return this.api.insert('notes', noteFields)
            .pipe(map(data => data));
    }

    deleteNote(id: number) : Observable<any>{
        return this.api.delete('notes', id);
    }

    editNote(id: number, newValues: Object): Observable<Note>{
        return this.api.put('notes', id,  newValues)
            .pipe(map(data => data));
    }
}