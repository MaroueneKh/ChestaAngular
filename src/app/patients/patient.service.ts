import { Injectable,NgModule } from '@angular/core';
import { Patient } from './patient';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports:[HttpClient]
  })
export class PatientService {

  constructor(private http: HttpClient) { }
  getPatients(){
    return this.http.get('/api/afficherPatients');
  }



}

