import { GetUsersService } from '../_service/GetUsersService';
import { Injectable } from '@angular/core';
import { User } from '../_models';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    UserList;
    service;
    
    constructor( service: GetUsersService) {
        this.service=service;
       
    }


    authenticate(username: String, password: string):boolean{
       
       
        this.service.getAllUsers()
        .forEach(usr => {
            
            
            if(usr.username == username && usr.password == password){
               
                return true;
                
            }
            
           
        });
           
           return false;
            
        
            
        


    }

}