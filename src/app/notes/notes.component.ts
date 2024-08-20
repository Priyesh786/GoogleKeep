import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notesList: any[]=[];
  constructor(private httpService: HttpService){}
  showCreateNote = false;
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
