import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthProvider {
    constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

      // Registro de usuario
      registerUser(email:string, password:string){
        return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
        .then((res)=>{
         // El usuario se ha creado correctamente. 
        })
        .catch(err=>Promise.reject(err))
     }
}
