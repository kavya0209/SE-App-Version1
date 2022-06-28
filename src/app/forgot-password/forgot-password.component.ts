import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoLoginPage(){
    this.router.navigate(['login']);
  }

  onResetPassword(any){
  
  }

}
 