/**
 * Created by abc on 17-Jul-16.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';

@Component({
    moduleId : module .id,
    selector:'login-form',
    templateUrl:'login.html'
})

export class LoginComponent implements OnInit{

    userDetails = new UserCredential();

    ngOnInit() {
    console.info("Heyoo..!! Am login");
        }

    OnSubmit(){

    }

    get diagonostic(){
        return JSON.stringify(this.userDetails);
    }
}

export class UserCredential{
    username:string;
    password:string;
}