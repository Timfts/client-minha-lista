import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './Notes-list.component.html'
})
export class NotesList implements OnInit {
  
  constructor(private notesService : NotesService) { }

  ngOnInit(){
    this.notesService.getAll()
      .subscribe(data => {
        console.log(data);
      });
  }


}