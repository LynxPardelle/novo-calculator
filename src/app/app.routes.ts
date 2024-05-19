import { Routes } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import { ErrorComponent } from './core/components/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.LoginRoutes),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./calculator/calculator.routes').then((m) => m.CalculatorRoutes),
  },
  {
    path: 'login',
    redirectTo: 'auth',
  },
  {
    path: 'register',
    redirectTo: 'auth/register',
  },
  {
    path: 'recovery',
    redirectTo: 'auth/recovery',
  },
  {
    path: 'recovery:token',
    redirectTo: 'auth/recovery:token',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
