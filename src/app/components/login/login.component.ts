import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;
  authService = inject(AuthService);
  router = inject(Router);

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.error = true;
        console.log(err);
      },
    });
  }
}
