import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { User } from 'src/app/Models/user.model';
import { RendezVousService } from 'src/app/Services/rendez-vous.service';
import { RendezVous } from 'src/app/Models/rendez-vous';

@Component({
  selector: 'app-detail-medecin',
  templateUrl: './detail-medecin.component.html',
  styleUrls: ['./detail-medecin.component.scss']
})
export class DetailMedecinComponent implements OnInit {
   idmedecin ;
   Medecin: User;
   constructor(  private route: ActivatedRoute,
    private UserServ: UserServiceService, private RdvServ: RendezVousService,
    private router: Router) { }
  ngOnInit() {
    this.idmedecin = this.route.snapshot.paramMap.get("id");
    console.log(this.idmedecin);
    this.UserServ.getUserId(this.idmedecin).subscribe(response => {
      this.Medecin = response[0] ;
    console.log(this.Medecin['email']);
    })
  }

//AJOUTER RENDEZ VOUS
public AddRdvAction(){
  console.log('Add rdv button clicked');
  this.RdvServ.AddRendezVous().subscribe(response => {
    this.Medecin = response[0] ;
 // console.log(this.Medecin['email']);
  })}
}
