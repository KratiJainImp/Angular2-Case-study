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
    private allUserData : UserCredential[];
    constructor(private loginService:LoginService,private router:Router){

    }
    userDetails = new UserCredential();

    ngOnInit() {
    console.info("Heyoo..!! Am login");
        }

    onSubmit(){
       let ifValid:boolean=false;
        this.loginService.authenticateUser(this.userDetails)
            .subscribe(
                (allData: UserCredential[]) => {
                    this.allUserData = allData;
                    this.allUserData.forEach(userData=>{
                        if(userData.username==this.userDetails.username&&userData.password==this.userDetails.password){
                            ifValid=true;
                        }
                    });

                    ifValid?this.router.navigate(['dashboard']):console.log("errror");
                },
                 msg=>  {
                     this.errorMessage = <any>msg;
                     console.log("errr",this.errorMessage);
                 });
        
    }

    get diagonostic(){
        return JSON.stringify(this.userDetails);
    }
}

export class UserCredential{
    username:string;
    password:string;
}