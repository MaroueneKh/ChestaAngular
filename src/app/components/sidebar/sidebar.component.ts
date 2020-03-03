import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Patients',  icon: 'ni-circle-08', class: '' },
    { path: '/maps', title: 'Medecins et radiologues',  icon:'ni-briefcase-24', class: '' },
    { path: '/icons', title: 'Chesta Detect',  icon:'ni-sound-wave', class: '' },
    { path: '/user-profile', title: 'Profil Personnel',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/suivi-patients', title: 'Suivi hebdomadaire',  icon:'ni-calendar-grid-58', class: '' },
    { path: '/login', title: 'Forum',  icon:'ni-chat-round', class: '' },
    { path: '/maps', title: 'Med-eNews',  icon:'ni-paper-diploma', class: '' },
    { path: '/dashboard', title: 'Statistiques',  icon: 'ni-chart-bar-32', class: '' },
    { path: '/maps', title: 'Contact',  icon:'ni-mobile-button', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
