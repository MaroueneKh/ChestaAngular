import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  base_path = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  // Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}


AddRendezVous()
{
  return this.http
    .post<User[]>(this.base_path+"/user/AddRdv",{ "idpatient" : "smgggg","idmedecin" : "angular" })
    .pipe()
}



}

