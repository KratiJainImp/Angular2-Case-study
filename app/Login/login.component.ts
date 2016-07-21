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

    private ifUserValid:boolean;
    constructor(private loginService:LoginService,private router:Router){

    }
    userDetails = new UserCredential();

    ngOnInit() {
    console.info("Heyoo..!! Am login");
        }

    onSubmit(){ 
        this.ifUserValid= this.loginService.authenticateUser(this.userDetails);
        /*if(this.ifUserValid){
          this.router.navigate(['/heroes']);
        }
        else{

        }*/
    }

    get diagonostic(){
        return JSON.stringify(this.userDetails);
    }
}

export class UserCredential{
    username:string;
    password:string;
}