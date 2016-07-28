/**
 * Created by krati.jain on 21-07-2016.
 */
import { Injectable } from '@angular/core';
import {UserCredential} from './login.component';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService{
    errorMessage:string;
    ifUserValid:boolean = false;
    constructor(private http:Http){

    }
private  userJson ="app/data/userList.json";
    private userCredentials:UserCredential;
    authenticateUser(user:UserCredential):Observable<UserCredential[]>{
        this.userCredentials = user;
        console.log("calling authenticate user");
        return this.http.get(this.userJson)
            .map(this.validateUser)
            .catch(this.handleError);
                   }


    private validateUser(res: Response){
     return res.json() || {};
        /*   let ifUserValid:boolean = false;
        let allUsersCredentials:UserCredential[] = res.json();
        allUsersCredentials.forEach(user=>{
            if(user.username==this.userCredentials.username&&user.password==this.userCredentials.password){
                ifUserValid=true;
    }
        })
        return ifUserValid;*/

    }
    handleError(error:any){
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


// return true;
/*return this.http.get(this.userJson)
 .toPromise()
 .then(response => console.log("response is ",response))
 .catch(this.handleError);*/