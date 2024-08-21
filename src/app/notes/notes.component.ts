import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notesList: any[]=[];
  noteTitle: string = '';
  noteDescription: string = '';

  constructor(private httpService: HttpService, private route: Router){}

  openInpBox() {
    const doc1 = document.getElementById('inp-1');
    const doc2 = document.getElementById('inp-2');

    if(doc1?.style.display=='none' && doc2?.style.display=='block') {
      doc1.style.display='block';
      doc2.style.display='none'
    }
    else {
      doc1!.style.display='none';
      doc2!.style.display='block'
    }
  }
  uploadData(e:any){ 
  if(e.key =='Enter'){
  this.httpService.addNotes(this.noteTitle, this.noteDescription).subscribe({
    next:(res)=>{
      console.log(this.noteTitle);
      console.log(this.noteDescription);
      window.location.href='/home/notes';
    },
    error:(err)=>{
      console.log(err)
    }
  }
  ) 
  }}

  ngOnInit():void {
    this.httpService.getAll().subscribe({
      next:(res:any)=>{
        this.notesList = res.data.data.filter((archive: any) => {
          return !archive.isArchived && !archive.isDeleted;
        });
        console.log(res.data.data)
      },
      error:(e)=>{
        console.log("err",e)
      }
    })
  }

}
