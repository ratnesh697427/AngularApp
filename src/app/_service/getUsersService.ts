import { User } from '../_models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GetUsersService{

    getAllUsers(){
        let u1=new User("ratnesh","1234","r@gmail.com","Trainee");
        let u2=new User("Randy","1234","b@gmail.com","Trainee");
        
        return [u1,u2]; 
    }

}