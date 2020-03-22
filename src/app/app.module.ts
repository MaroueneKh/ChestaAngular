import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { HistoriquePatientsComponent } from './pages/historique-patients/historique-patients.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
import { DetailMedecinComponent } from './pages/detail-medecin/detail-medecin.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HistoriquePatientsComponent,
    ListeMedecinsComponent,
    DetailMedecinComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
