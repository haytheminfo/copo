import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  loadedData: boolean=true;
  constructor(public loginService: AuthenticationService, private router: Router) { }
  ngOnInit(): void {

  }
  logout(){
    this.loginService.logOut()
    this.router.navigate(['login']);
  }
}
