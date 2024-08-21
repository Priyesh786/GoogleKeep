import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
 
  loginForm!:FormGroup;
  email: string = '';
  password: string = '';
  loginError: string | null = null; 

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private route: Router){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitForm() {
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;
    console.log(this.email);
    console.log(this.password);

    this.httpService.login({email: this.email, password: this.password}).subscribe(
      (res: any)=> {
        console.log(res);
        const id= res.id;
        localStorage.setItem("access_token", id);
        this.route.navigate(['/home/notes']);
      },(err:any)=> {
        this.loginError = 'Invalid email or password. Please try again.';
        console.log("err", err);
      }
    )

  }
  opendoor(e:Event): void{
    e.preventDefault();
    let drop = document.getElementById('drop');
   // @ts-ignore
   console.log(drop.style.display);
   //@ts-ignore
    if(drop.style.display=='none' || drop.style.display=='')
    {// @ts-ignore
      drop.style.display='block';
    } // @ts-ignore
    else  { // @ts-ignore
      drop.style.display='none';
    }
  }
  
}
