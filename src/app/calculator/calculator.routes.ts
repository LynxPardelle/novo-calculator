import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const CalculatorRoutes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'calculator',
  },
];
