/**
 * Created by abc on 17-Jul-16.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
    moduleId : module .id,
    selector:'login-form',
    templateUrl:'login.html'
})

export class LoginComponent implements OnInit{
    ngOnInit() {
    console.info("Heyoo..!! Am login");
        }
}