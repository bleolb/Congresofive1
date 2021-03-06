import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermissionsService } from '../service/permissions.service';
import { LoginService } from '../service/login.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: FormGroup;
  constructor(
    private loginServices: LoginService,
    private permisos: PermissionsService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.loginData = this.formBuilder.group({
      email: ["ble@gmail.com", Validators.required],
      password: ["123456", Validators.required],
    });
  }

  login(): void {
    let email = this.loginData.get('email').value;
    let password = this.loginData.get('password').value;
    let datalogin = {
      person: {
        password,
        email
      }
    };
    this.loginServices.login(datalogin).subscribe((data: Data) => {
      if (data.ok) {
          if (this.permisos.decodificarToken(data.token)) {
          this.router.navigate(['/home']);
        } else {
          email = '';
          password = '';
          alert('Error')
        }
      } (error: String) => {
        email = '';
        password = '';
        alert(error)
      };
    });
  }
}
