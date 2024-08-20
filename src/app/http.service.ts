import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=wPdnlw7aSP9MkmmIn1ARRLt3YiFaqW0AhbujF2HQywT0QKyCVQvYYCo3MJLtB5iJ")
  }
}
