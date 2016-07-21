/**
 * Created by krati.jain on 21-07-2016.
 */
import { Injectable } from '@angular/core';
import {UserCredential} from './login.component';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService{
    constructor(private http:Http){

    }
private  userJson:string ="H:/apache-tomcat-7.0.70-windows-x64/apache-tomcat-7.0.70/webapps/Angular2-Case-study/data/userList.json";
    authenticateUser(user:UserCredential){
        //Todo : http request for so
       // return true;

        return this.http.get(this.userJson)
            .toPromise()
            .then(response => console.log("response is ",response))
            .catch(this.handleError);
    }

    handleError(){
        console.log("Request error");
    }
}