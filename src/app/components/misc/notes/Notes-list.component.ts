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
  notes: Note[];
  loading: boolean;
  dialogInstRef: MatDialogRef<DialogInst>;

  constructor(private notesService: NotesService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.loading = true;
    this.notesService.getAll()
      .subscribe(data => {
        this.loading = false;
        this.notes = data;
      });
  }

  deleteNote(id) {
    this.notesService.deleteNote(id)
      .subscribe(data => {
        console.log(data);
        this.getAllNotes();
      });
  }

  editNote(note) {
    this.dialogInstRef = this.dialog.open(DialogInst, {
      data: {
        formType: 'Editar',
        title: note.title,
        content: note.content,
        id: note.id_note
      }
    }
    );

    this.dialogInstRef.afterClosed()
      .subscribe(value => {
        if(value.title && value.content){
          this.loading = true;
          let newValues = {title:value.title, content: value.content}
          this.notesService.editNote(value.id, newValues)
            .subscribe( newNote => {
              const oldVersion = this.notes.filter( item => item.id_note == note.id_note)[0];
              const oldVersionIndex = this.notes.indexOf(oldVersion);
              this.notes[oldVersionIndex] = newNote[0];
              this.loading = false;
            });
        }
      });
  }

  addNote() {
    this.dialogInstRef = this.dialog.open(DialogInst, {
      data: {
        formType: 'Adicionar'
      }
    });

    this.dialogInstRef.afterClosed()
      .subscribe(value => {
        if (value.title && value.content) {
          this.loading = true;
          this.notesService.addNote({ title: value.title, content: value.content })
            .subscribe(data => {
              if (data) {
                this.notes.push(data[0]);
                this.loading = false;
              }
            })
        }
      });

  }


}