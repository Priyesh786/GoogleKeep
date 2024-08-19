import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


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
  constructor(){}
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
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

 
}
