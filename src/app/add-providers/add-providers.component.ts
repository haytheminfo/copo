import { Component } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrl: './add-providers.component.css'
})
export class AddProvidersComponent  {


  constructor(private provider:ProvidersService,private router:Router) {}

  addproviders(provideradd:any){
    console.log(provideradd);
     let provider ={
       name:provideradd.nom,
       address:provideradd.address,
       email:provideradd.email
     };
     this.provider.addprovider(provider).subscribe(
      data=>{
console.log(data);
this.router.navigate(["listproviders"]);
      },
      error => console.log(error))

  }

  }


