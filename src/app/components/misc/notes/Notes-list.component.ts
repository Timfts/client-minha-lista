import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';

import { Note } from 'src/app/core/models/note.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogInst } from '../dialog/DialogInst.component';

@Component({
  selector: 'app-notes-list',
  templateUrl: './Notes-list.component.html',
  styleUrls: ['./Notes-list.component.scss']
})
export class NotesList implements OnInit {
  notes : Note[];
  loading : boolean;
  dialogInstRef: MatDialogRef<DialogInst>;

  constructor(private notesService : NotesService,
              private dialog: MatDialog) { }

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

  openDialog(){
    this.dialogInstRef = this.dialog.open(DialogInst, {
      hasBackdrop: false
    });
  }


}