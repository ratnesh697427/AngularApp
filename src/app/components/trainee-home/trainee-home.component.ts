import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-trainee-home',
  templateUrl: './trainee-home.component.html',
  styleUrls: ['./trainee-home.component.css']
})
export class TraineeHomeComponent implements OnInit {
  users:User[]=[];
  fakes=["ratnesh","avijit","kashyap"];

  constructor(private http : HttpClient) { }

  ngOnInit() {
    console.log(this.getUsersApi().subscribe((response)=>{
      this.users=response
    }));

  }
  getUsersApi(){

    return this.http.get<User[]>("http://localhost:8080/SampleRestApp/all");


  }

}
