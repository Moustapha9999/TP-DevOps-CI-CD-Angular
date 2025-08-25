import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() { }

addUser(user: User){
  this.users.push(user);
}

updateUser(user: User){
  const index = this.users.findIndex(a => a.id === user.id);
  this.users[index] = user;

}

deleteUser(id: number){
  this.users = this.users.filter(a => a.id !== id);

}

listUsers(){
  return this.users;
}



}

