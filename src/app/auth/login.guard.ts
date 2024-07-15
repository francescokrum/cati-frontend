import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login-service.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService);
  let router = inject(Router);

  const url = state.url;

  console.log('URL solicitada:', url);

  if (url.startsWith('/admin')) {
    if (!loginService.hasPermission('ADMIN')) {
      alert('Você não tem permissão para acessar essa rota!');
      router.navigate(['/login'])
      return false;
    }
  } else if (url.startsWith('/cliente')) {
    if (!loginService.hasPermission('CLIENTE')) {
      alert('Você não tem permissão para acessar essa rota!');
      router.navigate(['/login'])
      return false;
    }
  } else if (url.startsWith('/dev')) {
    if (!loginService.hasPermission('DEV')) {
      alert('Você não tem permissão para acessar essa rota!');
      router.navigate(['/login'])
      return false;
    }
  }

  return true;
};
