import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.register({ email: this.email, password: this.password, confirmPassword: this.confirmPassword }).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/confirmation']);
        if (this.password !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
        } 
        this.router.navigate(['/login']);
        console.log('Inscription réussie, vous pouvez maintenant vous connecter.');
      }
    });
  }
}
