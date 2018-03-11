import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataservice: DataService) { 
    
  }

  ngOnInit() {

    this.name = "Akshay";
    this.age = 30;
    this.email = "akshaykatrodiya23@gmail.com";
    this.address = {
      street: '40 Colonial Dr Apt. F',
      city: 'New Paltz',
      state: 'NY',
      zipcode: 12561
    };
    this.hobbies = ['Travelling', 'Watch movies', 'Plying pool', 'Bowling', 'Listen to mucsic'];
    this.dataservice.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  onclick(){
    this.name = "Akkii";
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length; i++){
      if(this.hobbies[i] === hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string,
  zipcode:number
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}