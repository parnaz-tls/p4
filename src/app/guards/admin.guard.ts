import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('isOk') && sessionStorage.getItem('isOk')=='true'){
    return true;
  }
  else{
    return false;
  }
}; 
