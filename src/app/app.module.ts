import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialsListComponent } from './credentials-list/credentials-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCredentialsComponent } from './add-credentials/add-credentials.component';
import { AddComponent } from './add/add.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    CredentialsListComponent,
    AddCredentialsComponent,
    AddComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
