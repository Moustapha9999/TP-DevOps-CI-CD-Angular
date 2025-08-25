import { Component } from '@angular/core';
import { Role } from '../model/role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})

export class RoleComponent {
  compteur = 0;
  valueSearch:string = '';
  role : Role = {
        'id':0,
        'libelle':''

    }
    roles : Role[] = [];

deleteRole(id:number) {
    Swal.fire({
      title: "Etes vous sûre de vouloir supprimer ce role ?",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then((result) => {

      if (result.isConfirmed) {
        this.roles = this.roles.filter((a)=> a.id != id);
      }
    });
  }

addRole(){
    if(this.role.id == 0){
      if(this.role.libelle.length!= 0  ){
        let u = new Role();
        u.id = ++this.compteur;
        u.libelle = this.role.libelle;
        this.roles.push(u);
        this.clear();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Role ajouté avec succès",
          showConfirmButton: false,
          timer: 1500
        });

      }else{
        alert("Veillez remplir les champs");
      }
    }else{
      this.roles.filter((a)=> a.id == this.role.id)[0] = this.role;
      this.clear();

    }

  }
  clear(){
    this.role ={
      'id':0,
      'libelle':''

  }
}
recharge(p:Role){
    this.role = p;
  }

}
