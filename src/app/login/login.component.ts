import { Component } from '@angular/core';

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
}
