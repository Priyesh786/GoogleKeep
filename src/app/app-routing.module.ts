import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
import { UsernameComponent } from './username/username.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { EditLabelsComponent } from './edit-labels/edit-labels.component';
import { TrashComponent } from './trash/trash.component';
import { ArchivesComponent } from './archives/archives.component';
import { AuthGuard } from './authguard/auth.guard';



const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'basic-info',
    component: BasicInfoComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'username',
    component: UsernameComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[ 
    {
      path: 'notes',
     component: NotesComponent,
     canActivate:[AuthGuard]
    },
    {
      path: 'reminders',
     component: RemindersComponent
    },
    {
      path: 'edit-labels',
     component: EditLabelsComponent
    },
    {
      path: 'trash',
      component: TrashComponent
    },
    {
      path: 'archives',
      component: ArchivesComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
