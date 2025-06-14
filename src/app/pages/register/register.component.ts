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
    if (!this.email || !this.password || !this.confirmPassword) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (this.password !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    } 

    this.authService.register({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        console.log('Inscription réussie:', res);
        this.router.navigate(['/confirmation']);
      }, 
        error: (err) => {
        console.error('Erreur lors de l\'inscription:', err);

        if (err.status === 409) {
          alert('Un compte avec cet email existe déjà. Veuillez en utiliser un autre.')
        } else {
          alert('L\'inscription a échoué. Veuillez vérifier vos informations.');
        }
      }
    });
  }
}
