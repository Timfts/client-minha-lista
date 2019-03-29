import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { NotesService } from './services/notes.service';

@NgModule({
    imports: [],
    providers: [
      NotesService,
      ApiService
    ],
    declarations: []
  })
  export class CoreModule { }