import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';

import { Note } from 'src/app/core/models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './Notes-list.component.html'
})
export class NotesList implements OnInit {
  notes : Note[];
  loading : boolean;

  constructor(private notesService : NotesService) { }

  ngOnInit(){
    this.getAllNotes();
  }

  getAllNotes(){
    this.loading = true;
    this.notesService.getAll()
    .subscribe(data => {
      this.loading = false;
      this.notes = data;
    });
  }

  deleteNote(id){
    this.notesService.deleteNote(id)
      .subscribe(data => {
        console.log(data);
        this.getAllNotes();
      });
  }


}