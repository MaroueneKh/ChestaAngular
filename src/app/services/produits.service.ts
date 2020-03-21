import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  base_path = 'http://localhost:1616';

  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllProducts(): Observable<Produit[]>
  {
    return this.http
      .get<Produit[]>(this.base_path+"/selectAll", this.httpOptions)
      .pipe()
  }

  getProduitById(id): Observable<Produit>
  {
    return this.http
      .get<Produit>(this.base_path+"/selectById?id="+id, this.httpOptions)
      .pipe()
  }
}
