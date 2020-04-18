import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home/home.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { TableComponent } from './table/table.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginHelper } from './loginHelper.service';
import { CodeConverterComponent } from './code-converter/code-converter.component';

const firebaseConfig = {
  apiKey: "AIzaSyAP8GVKMJ4zxCoA45tTf8b7cToubs_1sHk",
  authDomain: "venumedicaldb.firebaseapp.com",
  databaseURL: "https://venumedicaldb.firebaseio.com",
  projectId: "venumedicaldb",
  storageBucket: "venumedicaldb.appspot.com",
  messagingSenderId: "945455103215",
  appId: "1:945455103215:web:c2a6a5246cf435cdf2ef1a",
  measurementId: "G-JNQS6MXL9W"
};
@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    HomeComponent,
    BillFormComponent,
    TableComponent,
    AddAgencyComponent,
    LoginComponent,
    CodeConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AngularFirestore, LoginHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
