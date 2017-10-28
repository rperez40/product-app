import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';



@Injectable()
export class DbProvider {

  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello DbProvider Provider');
  }

}
