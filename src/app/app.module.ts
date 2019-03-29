import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatExpansionModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

//layout components
import { HeaderComponent } from './components/layout/Header/Header.component';
import { NotesList } from './components/misc/notes/Notes-list.component';
import { NoteComp } from './components/misc/notes/Note.component';

import { DialogInst } from './components/misc/dialog/DialogInst.component';

//pages

import { Homepage } from './components/pages/home/HomePage.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Homepage,
    NotesList,
    NoteComp,
    DialogInst
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [DialogInst],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
