import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
import { UsernameComponent } from './username/username.component';
import { HomeComponent } from './home/home.component';

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
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
