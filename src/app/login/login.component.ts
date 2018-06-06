import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

import * as firebaseui from 'firebaseui';

import {  environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;

  constructor(private router: Router , private user:AppService  ) {

  }
  ngOnInit() {
    //this.afAuth.authState.subscribe(d => console.log(d));
  }



  login(event: any){

    
    console.log('\n', this.userName , this.password);

   if(this.userName == 'admin'  && this.password == '1234')
    {

      this.user.setUserLoggedIn();
      this.user.setUserDetail(this.userName);
      this.router.navigate(['dashboard']);

    } 
    
    

  }

  socialConsole(){

    console.log('button clicked');

  }

}
