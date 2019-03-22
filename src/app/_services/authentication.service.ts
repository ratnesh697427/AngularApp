import { GetUsersService } from 'src/app/_services/getUsers.service';
import { Injectable } from '@angular/core';
import { User } from '../_models';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    UserList;
    service;
    temp=false;
    constructor( service: GetUsersService) {
        this.service=service;

    }


    authenticate(username: String, password: string):boolean{


        this.service.getAllUsers()
        .forEach(usr => {


            if(usr.username == username && usr.password == password){
               this.temp=true;


            }


        });

        return this.temp;







    }

}
