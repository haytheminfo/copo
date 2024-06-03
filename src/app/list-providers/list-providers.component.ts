import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Provider } from '../provider';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit{
listpro :Provider[]=[];
  constructor(private listprovider:ProvidersService,private router:Router) {}

  ngOnInit(): void {
    this.refrech();
    }
    refrech(){
      this.listprovider.getprovider().subscribe((data)=>
        {
          console.log(data);
          this.listpro=data;
        },
        error=>console.error(error));
      }
    goAdd(){
this.router.navigate(["addproviders"]);
    }
deleteprovider(providers:Provider){
this.listprovider.deleteprovider(providers).subscribe(data=>this.refrech())
}
updateProviders(provider:any){
  // console.log(provider.id);
  // alert(provider.id);
  this.router.navigate(["UpdateProvider",provider.id]);
 }
    }
