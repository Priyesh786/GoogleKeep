import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notesList: any[]=[];
  constructor(private httpService: HttpService, private router: Router){}
  ngOnInit():void {
    this.httpService.getAll().subscribe({
      next:(res:any)=>{
        this.notesList = res.data.data;
        console.log(res.data.data)
      },
      error:(e)=>{
        console.log("err",e)
      }
    })
  }

}
