import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user.model';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.scss']
})
export class ListeMedecinsComponent implements OnInit {
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
    //get medecins list
  }

}
