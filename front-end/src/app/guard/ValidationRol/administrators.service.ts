import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { PermissionsService } from '../../service/permissions.service';



@Injectable({
  providedIn: 'root'
})
export class AdministratorsService implements CanActivate {
  constructor(public auth: PermissionsService, public router: Router) {}
  rol:any;
  canActivate() {
    this.rol=  this.auth.getUserRol()
    console.log(this.rol)
    if (this.rol!='Administrador'){
      alert('Usted no puede ingresar')
      this.router.navigate(['/home'])
    }else{
      return true;
    }
  }

}
