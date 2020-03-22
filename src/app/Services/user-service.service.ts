import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
base_path = 'http://localhost:4000';

constructor(private http: HttpClient) { }
// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


getAllProducts(): Observable<User[]>
{
  return this.http
    .get<User[]>(this.base_path+"/user/GetAllMedecins", this.httpOptions)
    .pipe()
}

getUserId(id): Observable<User>
{
  const  params = new  HttpParams().set('idmedecin',id);
  return this.http.get<User>(this.base_path+"/user/GetUserByID", {params}).pipe();
}

}
