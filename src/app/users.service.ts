import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    let url = 'https://gorest.co.in/public/v1/users?page=111';
    const headers: any = {
      Authorization:
        'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce',
    };
    return this.http.get(url, { headers: headers });
  }

  getSingleUser(id: number) {
    let url = 'https://gorest.co.in/public/v1/users/' + id;
    const headers: any = {
      Authorization:
        'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce',
    };
    return this.http.get(url, { headers: headers });
  }
  createUser() {
    let url = 'https://gorest.co.in/public/v1/users';

    let data:any = {
      name: 'Sai Kumar2',
      gender: 'male',
      email: 'sai.kumar2@15ce.com',
      status: 'active',
    };
    const headers: any = {
      Authorization:
        'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce',
    };
    return this.http.post(url, data, { headers: headers });
  }
  updateUser(id:any) {
    let url = 'https://gorest.co.in/public/v1/users/'+id;

    let data:any = {
      id:id,
      name: 'kumar sai',
      gender: 'male',
      email: 'kumar.sai@15ce.com',
      status: 'active',
    };
    const headers: any = {
      Authorization:
        'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce',
    };
    return this.http.put(url, data, { headers: headers });
  }

  deleteUser(id:string){
    var url = 'https://gorest.co.in/public/v1/users/' + id;
    const headers:any = {'Authorization':'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'};
    return this.http.delete(url,{headers: headers});}
}
