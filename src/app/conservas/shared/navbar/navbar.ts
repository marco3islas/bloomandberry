import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  icon: string;
  label: string;
  route: string
}

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {


  menuOptions: MenuOptions[] = [
    {
      icon: 'home',
      label: 'inicio',
      route: '/main/home'

    },
    {
      icon: 'check_circle',
      label: 'About',
      route: '/main/about'

    },
    {
      icon: 'category',
      label: 'Productos',
      route: '/main/productos'

    },
    {
      icon: 'contact_page',
      label: 'Contacto',
      route: '/main/contact'

    },

  ]


}
