import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    //private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string){
    //return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password: string){
    //return this.af.signInWithEmailAndPassword(email, password);
  }
}
