import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  username!: string;
  password!: string;
  invalidLogin = false;

  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private loginservice: AuthenticationService, private router :Router) { }

  ngOnInit(): void {

  }
  /*
 checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }

}
*/
checkLogin() {

  this.loginservice.authenticate(this.username, this.password).subscribe(
    (data:any) => {
      this.router.navigate([''])
      this.invalidLogin = false
      console.log(data)
    },
    (error:any) => {
      this.invalidLogin = true
      console.log(error)
    }
  );
}

}


