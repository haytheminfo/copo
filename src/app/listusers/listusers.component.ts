import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrl: './listusers.component.css'
})
export class ListusersComponent implements OnInit {

user:any;  
  constructor(private userservice : UserService) {
    
    
  }
  ngOnInit(): void {
    this.userservice.getuser().subscribe(
      data =>
        {
        console.log(data);
        this.user=data;
        },
      error=>console.error(error));
    
  }

}
