import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'game/:id', component: GameDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'confirmation', loadComponent: () => import('./pages/confirmation/confirmation.component').then(m => m.ConfirmationComponent) },
    {path: 'game-detail/:id', loadComponent: () => import('./pages/game-detail/game-detail.component').then(m => m.GameDetailComponent) },
    {path: '**', redirectTo: ''}

];
