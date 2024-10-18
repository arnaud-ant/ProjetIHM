import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string="";
  message: string="";

  send():void{   
    if(this.email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))
    {
      if(this.message !== "")
        this.contactServ.sender(this.email,this.message);
      else
        this.contactServ.notEmpty();
    }
    else
      this.contactServ.validMail();
  }

  constructor(private contactServ: ContactService) { }

  ngOnInit(): void {
  }

}
