import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';*/
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
 
/*@Component({
 templateUrl: 'build/pages/login/login.html',
 directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})*/
export class LoginPage {
 username: AbstractControl;
 password: AbstractControl;
 errorMessage: string = null;
 loginForm: FormGroup;
 
 constructor(private navCtrl: NavController, private fb: FormBuilder) {
 this.loginForm = fb.group({
 'username': ['', Validators.compose([Validators.required])],
 'password': ['', Validators.compose([Validators.required])]
 });
 
 this.username = this.loginForm.controls['username'];
 this.password = this.loginForm.controls['password'];
 }
 
}
