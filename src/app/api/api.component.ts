import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  providers: [UsersService]
})
export class ApiComponent implements OnInit {
usersList:any = [];
userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit(): void {
   this.getusers();
  }

  getusers(){
    this.user.getUsers().subscribe((res:any)=>{
      this.usersList = res.data;
    },(err:any)=>{
      console.log(err);
    })
  }


  viewUser(id:any){
    this.user.getSingleUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    },(err:any)=>{
      console.log(err);
    })

  }

  editUser(id:any){
    this.user.updateUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.getusers();
    },(err:any)=>{
      console.log(err);
    })
  }

  deleteUser(id:any){
    this.user.deleteUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.getusers();
    },(err:any)=>{
      console.log(err);
    })
  }

  createUser(){
    this.user.createUser().subscribe((res:any)=>{
      this.userInfo = res;
      this.getusers();
    },(err:any)=>{
      console.log(err);
    })
  }

}
