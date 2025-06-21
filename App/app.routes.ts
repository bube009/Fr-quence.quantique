import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'frequencies',
    loadComponent: () => import('./pages/frequencies/frequencies.page').then(m => m.FrequenciesPage)
  },
  {
    path: 'photo-analyse',
    loadComponent: () => import('./pages/photo-analyse/photo-analyse.page').then(m => m.PhotoAnalysePage)
  },
  {
    path: '', // Route par défaut, redirige vers 'home'
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
