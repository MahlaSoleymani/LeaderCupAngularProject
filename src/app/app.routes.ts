import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RegisterComponent } from './views/register/register.component';
import { MustLogoutGuard } from './core/guards/must-logout.guard';
import { QuestionLayoutComponent } from './views/question-layout/question-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [MustLogoutGuard],
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
  },
 
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'question',
    component: QuestionLayoutComponent,
  },
  
];
