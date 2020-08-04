import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { PermissionsService } from '../../service/permissions.service';



@Injectable({
  providedIn: 'root'
})
export class AssistantService implements CanActivate {
rol:string;
  constructor(public auth: PermissionsService, public router: Router) {}
  canActivate() {
    if (this.rol != "Asistente") {
      alert('Usted no puede ingresar')
     this.router.navigate(['/home']);
    }else{
      return true;
    }
  }

}
