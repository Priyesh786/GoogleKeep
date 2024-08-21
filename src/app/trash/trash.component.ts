import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  trashList: any[]=[];
  constructor(private httpService: HttpService){}
  showCreateNote = false;
  ngOnInit():void {
    this.httpService.getAll().subscribe({
      next:(res:any)=>{
        this.trashList = res.data.data.filter((trash: any) => {
          return trash.isDeleted;
        });
        console.log(res.data.data)
      },
      error:(e)=>{
        console.log("err",e)
      }
    })
  }
}
