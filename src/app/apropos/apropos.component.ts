import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit{
  @Output() eventToSend = new EventEmitter();
  @Input() campany:string="";
  email:string = "infos@smart-it-partner.com";
  phone:number=98787521;
  adresse:string = "Technopole el Ghazela, Tunis";
  constructor(){
    console.log("Constructeur : " + this.campany);

  }
  ngOnInit(): void {
    console.log("ngOnInit :" + this.campany);

}
ngOnChanges() {
  console.log("ngOnChanges :" + this.campany);

 }
 sendEvent() {
  this.eventToSend.emit("Message du fils vers le pere");
}

}
