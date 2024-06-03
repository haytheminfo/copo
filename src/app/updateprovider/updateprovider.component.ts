import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../provider';
@Component({
  selector: 'app-updateprovider',
  templateUrl: './updateprovider.component.html',
  styleUrl: './updateprovider.component.css'
})
export class UpdateproviderComponent implements OnInit {
  idprovider!:number;
name!:string;
address!:string;
email!:string;

  constructor(private provider:ProvidersService,private activateroute:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.activateroute.params.subscribe(params => {
      this.idprovider = params['id'];

    });

    this.provider.getproviderbyid(this.idprovider).subscribe((data:any)=>{

      this.name=data.name,
      this.address=data.address,
      this.email=data.email
    }

          );
  }


  saveupdate(){
    let provider:Provider={
      id:this.idprovider,
      name:this.name,
      address:this.address,
      email:this.email
    }

this.provider.updateprovider(this.idprovider,provider).subscribe((data)=>
  this.router.navigate(["listproviders"])
) }

}
