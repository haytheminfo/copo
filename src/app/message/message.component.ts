import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() campanyMessage:string="";
  @Output() eventToSend = new EventEmitter();

  addContact(contactForm:any){
    alert(contactForm.nom+" "+contactForm.prenom+" "+contactForm.email+" "+contactForm.message);
  }
  sendEvent() {
    this.eventToSend.emit(new Date());
  }
}
