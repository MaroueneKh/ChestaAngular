import { Component, OnInit,NgModule,Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Patient } from 'src/app/patients/patient';
import { PatientService } from 'src/app/patients/patient.service';
import { Router } from '@angular/router';
// core components

@NgModule({
  imports:[HttpClient]
  })
  @Injectable({
    providedIn: 'root',
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [PatientService]
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public nom:string;
  public prenom:string;
  public date:string;
  public rapport:string;
  public detection:string;
  public 
  constructor(private http: HttpClient,private patientService: PatientService) { }
  patients;
  id;
  Show:boolean;
  ngOnInit() {
this.date="A rejoint il ya 4 semaines";
this.rapport="Rapports médicaux :2";
this.detection="Chesta Detect :2 ";
this.patientService.getPatients()
        .subscribe(response => {
          this.patients = response;
        });
this.Show=true;
  }
test(nom:any,prenom:any,id:any)
{
this.Show=false;
this.nom=nom;
this.prenom=prenom;
this.id=id;
}

  }




  


