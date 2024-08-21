import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent {
  archivesList: any[]=[];
  constructor(private httpService: HttpService){}
  showCreateNote = false;
  ngOnInit():void {
    this.httpService.getAll().subscribe({
      next:(res:any)=>{
        this.archivesList = res.data.data;
        console.log(res.data.data)
      },
      error:(e)=>{
        console.log("err",e)
      }
    })
  }
}
