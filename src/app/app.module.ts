import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatToolbarModule, MatExpansionModule } from '@angular/material';

//layout components
import { HeaderComponent } from './components/layout/Header/Header.component';
import { NotesList } from './components/misc/notes/Notes-list.component';
import { Note } from './components/misc/notes/Note.component';

//pages

import { Homepage } from './components/pages/home/HomePage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Homepage,
    NotesList,
    Note
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
