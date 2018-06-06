import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { AppService } from './app.service';
import { AuthguardGuard } from './authguard.guard';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';





const appRoutes:Routes = [
  {

  path: '',
  component: LoginComponent

  },

  {
    path: 'dashboard',
    canActivate:[AuthguardGuard],
    component: DashboardComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    


  ],
  providers: [AppService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
