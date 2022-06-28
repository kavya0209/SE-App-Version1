import { Component, OnInit , ViewChild , Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f', {static: false}) f: NgForm;
  @Output() cognitoUser = new EventEmitter();
  email = '';
  password = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLoggedin(model){

    // if(model.email && model.password){
   
    //   Auth.signIn({
    //     "username": model.email,
    //     "password": model.password,
    //   })
    //   .then(data => {
      
    //     this.cognitoUser.emit(data);
    //     this.router.navigate(['/layout']);
    //   })
    //   .catch((error: any) => {
    //     alert("Username or password is incorrect");
    //     this.router.navigate(['/login']);
    //   })
    // }
    // else{
    //   alert("Email and password fields are mandatory")
    // }

    this.router.navigate(['/layout']);
}

  gotoResetPwdPage(){
    this.router.navigate(['forgot-password']);
  }

  gotoSignUpPage(){
    this.router.navigate(['sign-up']);
  }

}
