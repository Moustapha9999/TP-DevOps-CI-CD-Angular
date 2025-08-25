import { Component } from '@angular/core';
import { User } from '../model/user';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  compteur = 0;
  valueSearch:string ="";
  user : any = {
      'id':0,
      'nom':'',
      'prenom':'',
      'age':0
  }
  users : User[] = [];

  constructor(private userService: UserService) {}

  addUser(){
    if(this.user.id == 0){
      this.user.id = this.compteur++;
      this.userService.addUser(this.user);
      this.users = this.userService.listUsers();
      console.log(this.users);
    } else {
      this.userService.updateUser(this.user);
      this.users = this.userService.listUsers();
    }
    this.user = { id: 0, nom: '', prenom: '', age: 0 };
  }
  deleteUser(id:number) {
    this.userService.deleteUser(id);
    this.users = this.userService.listUsers();
  }
 recharge(user: User){
    this.user = user;
  }



}
