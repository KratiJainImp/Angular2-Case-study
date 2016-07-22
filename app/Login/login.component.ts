/**
 * Created by abc on 17-Jul-16.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
 //import { NgForm }    from '@angular/forms';

@Component({
    moduleId : module .id,
    selector:'login-form',
    templateUrl:'login.html',
    providers: [LoginService]
})

export class LoginComponent implements OnInit{

    private ifUserValid:any;
    private errorMessage;
    constructor(private loginService:LoginService,private router:Router){

    }
    userDetails = new UserCredential();

    ngOnInit() {
    console.info("Heyoo..!! Am login");
        }

    onSubmit(){
        console.log("no submit")
        this.ifUserValid= this.loginService.authenticateUser(this.userDetails);

        this.loginService.authenticateUser(this.userDetails)
            .subscribe(
                ifValid => this.ifUserValid = ifValid,
                 msg=>  this.errorMessage = <any>msg);
        
    }

    get diagonostic(){
        return JSON.stringify(this.userDetails);
    }
}

export class UserCredential{
    username:string;
    password:string;
}