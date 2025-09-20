import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PRODUCT_CATEGORIES, PRODUCT_PACKS, PRODUCT_PRESENTATIONS } from '../../interfaces/productos-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, MatCardModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})

export default class Productos {
  productCategories = PRODUCT_CATEGORIES;
  productPresentations = PRODUCT_PRESENTATIONS;
  productPacks = PRODUCT_PACKS;

}
