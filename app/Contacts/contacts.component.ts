/**
 * Created by abc on 17-Jul-16.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
    selector:'contact-grid',
    template:`<h1>This is the contact view</h1>`
})

export class ContactsComponent implements OnInit{
    ngOnInit() {
    console.info("Heyoo..!! Am loaded");
        }
}