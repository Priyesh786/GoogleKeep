import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';

import { MatCard, MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
import { UsernameComponent } from './username/username.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NotesComponent } from './notes/notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { EditLabelsComponent } from './edit-labels/edit-labels.component';
import { ArchivesComponent } from './archives/archives.component';
import { TrashComponent } from './trash/trash.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicePipe } from './pipe/service.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BasicInfoComponent,
    PasswordComponent,
    UsernameComponent,
    HomeComponent,
    NotesComponent,
    RemindersComponent,
    EditLabelsComponent,
    ArchivesComponent,
    TrashComponent,
    ServicePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule
  

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

