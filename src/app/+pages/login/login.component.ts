import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router=inject(Router);
  check(){
    if(this.username=='admin' && this.password=='admin'){
      sessionStorage.setItem('isOk','true');
      this.message='';
      this.router.navigateByUrl('/admin/products');

    }
    else{
      this.message='Invalid username or password'
    }
  }


  username:string='';
  password:string='';
  message:string='';
}
