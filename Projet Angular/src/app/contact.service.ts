import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  sender(email: string,message: string): void{

    alert("Message received from " + email + " : \"" + message +"\"");
  }

  notEmpty(): void{
    alert("Message must not be empty");
  }

  validMail(): void{
    alert("You must enter a valid email adress like : example@example.com");
  }

  constructor() { }
}
