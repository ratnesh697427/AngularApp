import { User } from '../_models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GetUsersService{

    getAllUsers(){
        let u1=new User(1,"Ratnesh","r@gmail.com","ratnesh","1234","Trainee");
        let u2=new User(2,"Kashyap","k@gmail.com","kashyap","1234","Trainee");

        return [u1,u2];
    }

}
