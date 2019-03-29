import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatExpansionModule, MatButtonModule } from '@angular/material';

//layout components
import { HeaderComponent } from './components/layout/Header/Header.component';
import { NotesList } from './components/misc/notes/Notes-list.component';
import { Note } from './components/misc/notes/Note.component';



//pages

import { Homepage } from './components/pages/home/HomePage.component';
import { HttpClient } from 'selenium-webdriver/http';

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
    CoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
