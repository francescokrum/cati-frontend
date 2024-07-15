import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../auth/login';
import { LoginService } from '../../auth/login-service.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  login: Login = new Login()

  router = inject(Router);
  loginService = inject(LoginService)

  constructor(private snackBar: MatSnackBar) {
    this.loginService.removerToken();
  }

  logar() {
    this.loginService.logar(this.login).subscribe({
      next: token => {
        if(token){
          this.loginService.addToken(token)
          console.log(token)
          if(this.loginService.hasPermission("ADMIN")){
            this.router.navigate(['/admin'])
          }
          else if(this.loginService.hasPermission("CLIENTE")){
            this.router.navigate(['/cliente'])
          }
          else if(this.loginService.hasPermission("DEV")){
            this.router.navigate(['/dev'])
          }
          this.snackBar.open('Usuário autenticado com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: ['green-snackbar']
          });
        }
        else {
          alert('não veio token!')
        }
      },
      error: erro => {
        alert('Login ou Senha incorretos!');
      }
    })
  }

}
