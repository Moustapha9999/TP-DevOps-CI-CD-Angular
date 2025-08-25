import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../model/role';


@Pipe({
  name: 'filtreRole'
})
export class FiltreRolePipe implements PipeTransform {

  transform(role: Role[],value: any): Role[] {
    if(value.length != 0){
     return  role.filter((a) => a.libelle.includes(value));
    }
    return role;
  }

}
