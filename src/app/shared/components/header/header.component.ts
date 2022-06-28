import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  firstname = '';

  constructor(private router: Router,) { }

  ngOnInit(): void {
  
    // Auth.currentAuthenticatedUser()
    // .then(user => {
     
    //   if(user.attributes['custom:FirstName']) {
    //     this.firstname = user.attributes['custom:FirstName'] ;
    //   }
    //   else{
    //     this.firstname = 'User' ;
    //   }
    // })
    // .catch(err => console.log(err));
    
  }

  logOut(){
  
    // Auth.signOut()
    //   .then(data => {
    //     this.router.navigate(['login']);
    //   })
    //   .catch((error: any) => {
    //     console.log("error");
    //     console.log(error);
    //   })
  }

}
