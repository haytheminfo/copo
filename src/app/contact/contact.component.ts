import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ourCampany : string = "Smart IT Partner";
  ourMessage : string = "Tous les champ obligatoire";
  ourMessage1 : string = "*";
  mess : string =" bn tt";
  processEvent(message :any) {

    alert("Message du fils est : " + message);
  }
  processEvent1(message :any) {

    alert("Date Aujourd huit : " + message);
  }

}
