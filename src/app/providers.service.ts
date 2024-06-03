import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Provider } from './provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService implements OnInit{

  constructor(private http:HttpClient) { }
  getprovider(){
    return this.http.get<Provider[]>(environment.BaseUrl+"/providers");
  }
  addprovider(provider:Provider){
    return this.http.post<Provider[]>(environment.BaseUrl+"/providers",provider);
  }
  deleteprovider(provider:Provider){
    return this.http.delete<Provider[]>(environment.BaseUrl+"/providers/"+provider.id);
  }
  updateprovider(idprovider:number,provider:Provider){
    return this.http.put<Provider>(environment.BaseUrl+"/providers/"+idprovider,provider);
  }
getproviderbyid(idprovider:number){
  return this.http.get<Provider[]>(environment.BaseUrl+"/providers/"+idprovider);
}
  ngOnInit(): void {

  }
}
