import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postusers',
  templateUrl: './postusers.component.html',
  styleUrl: './postusers.component.css'
})
export class PostusersComponent implements OnInit {

  postuser:any;
  constructor(private listpost:PostService) {
    
    
  }
  ngOnInit(): void {
    
    
  }


}
