import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./conservas/pages/main/main'),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./conservas/pages/home/home'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./conservas/pages/about/about')
      },
      {
        path: 'productos',
        loadComponent: () =>
          import('./conservas/pages/productos/productos')
      },
      {
        path: 'productores',
        loadComponent: () =>
          import('./conservas/pages/menu/menu')
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./conservas/pages/contact/contact')
      },
    ]

  },
  {
    path: '**',
    redirectTo: 'main',
  }

];
