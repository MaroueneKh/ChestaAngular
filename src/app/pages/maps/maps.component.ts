import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  Medecins: User[] = [];
  constructor( private route: ActivatedRoute,
    private UserServ: UserServiceService,
    private router: Router) {

    }

  ngOnInit() {
    //get medecins list
    this.UserServ.getAllProducts().subscribe(response => {
      this.Medecins = response ;
    })
  }
//go to details
public gotodetails(id: string) {
  this.router.navigateByUrl("/detailmedecin/"+id);
}
}
