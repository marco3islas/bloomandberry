import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

interface Valores {
  titulo: string;
  imagen: string;
  descripcion: string;
}

interface Testimonials {
  name: string;
  role: string;
  comment: string;
  photo: string;
}

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MatIcon, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home {

  constructor(private router: Router) { }

  valor: Valores[] = [
    {
      titulo: 'Pulpas Naturales',
      imagen: 'favorite',
      descripcion: 'Pulpas 100% naturales, sin conservadores ni preservantes'
    },
    {
      titulo: 'Frescura',
      imagen: 'recommend',
      descripcion: 'Frescura y sabor autentico garantizados',
    },
    {
      titulo: 'Apoyo',
      imagen: 'volunteer_activism',
      descripcion: 'Apoyo a productores locales de Xochimilco'
    },
    {
      titulo: 'Inlcusion',
      imagen: 'diversity_1',
      descripcion: 'Inclusion laboral y capacitacion a mujeres, jovenes, personas trans y miembros de la comunidad local'
    }
  ]

  testimonial: Testimonials[] = [
    {
      name: 'María López',
      role: 'Productora local de Xochimilco',
      comment: 'Gracias a Bloom & Berry ahora puedo vender mis frutas sin intermediarios y mejorar mis ingresos.',
      photo: 'assets/images/maria.webp'
    },
    {
      name: 'Jorge Ramírez',
      role: 'Chef en Café Xochimilco',
      comment: 'Las pulpas frescas de Bloom & Berry nos han permitido ofrecer licuados más naturales y saludables en nuestro menú.',
      photo: 'assets/images/jorge.webp'
    },
    {
      name: 'Ana Lopez',
      role: 'Colaboradora en capacitación',
      comment: 'Con el apoyo de Bloom & Berry aprendí a trabajar en conservación de frutas y ahora apoyo a mi comunidad con este conocimiento.',
      photo: 'assets/images/ana.webp'
    }
  ];

  irProductos() {
    this.router.navigate(['productos']);
  }

}
