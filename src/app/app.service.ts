import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isUserLogged ;
  private userName;

  constructor() {

    this.isUserLogged = false;

   }

   setUserLoggedIn(){

    this.isUserLogged = true;

   }

   getUserLoggedIn(){

    return this.isUserLogged;

   }


   setUserDetail(name: any){

    this.userName = name;

   }

   getUserDetail(){

    return this.userName;

   }

}
