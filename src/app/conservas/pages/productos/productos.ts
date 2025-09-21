import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PRODUCT_CATEGORIES, PRODUCT_PACKS, PRODUCT_PRESENTATIONS } from '../../interfaces/productos-interface';
import { CommonModule } from '@angular/common';
import { TES_CATEGORIES } from '../../interfaces/tes-interface';
import { VoiceNavigationService } from '../../services/voice-navigation.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, MatCardModule, MatButton],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})

export default class Productos {
  productCategories = PRODUCT_CATEGORIES;
  productPresentations = PRODUCT_PRESENTATIONS;
  productPacks = PRODUCT_PACKS;
  tesCategories = TES_CATEGORIES;

  constructor(private voiceNav: VoiceNavigationService) { }

  start() {
    this.voiceNav.startListening();
  }

  stop() {
    this.voiceNav.stopListening();
  }
}
