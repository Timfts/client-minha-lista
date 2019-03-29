import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';


@Component({
  selector: 'app-note',
  templateUrl: './Note.component.html',
  styleUrls: ['./Note.component.scss']
})
export class NoteComp implements OnInit{
  postedDate: string;
  updatedDate: string;

  constructor() { 
  }

  @Input() note : Note;
  @Output() deleting = new EventEmitter<number>();

  ngOnInit(){
    this.postedDate = this.formatDate(this.note.send);
    if(this.note.edited){
      this.updatedDate = this.formatDate(this.note.edited);
    }
  }

  formatDate(date) : string{
    const dateInst = new Date(date);
    const month = dateInst.toLocaleString('pt-br', { month: 'long' });

    return `${dateInst.getDay()} de ${month} de ${dateInst.getFullYear()}`;
  }

  deletePost(){
    this.deleting.emit(this.note.id_note);
  }


}