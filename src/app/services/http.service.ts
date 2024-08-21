import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  BaseURL = "https://fundoonotes.incubation.bridgelabz.com/api/";

  login(data:any) {
    return this.http.post(`${this.BaseURL}user/login`, data);
  }

  getAll() {
    const id = localStorage.getItem("access_token");
    console.log(id);
    return this.http.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=${id}`);
  }
  addNotes(title:string, description:string) {
    return this.http.post(`${this.BaseURL}notes/addNotes?access_token=${localStorage.getItem('access_token')}`,{title, description})

  }
}
