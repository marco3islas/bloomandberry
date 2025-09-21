import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VoiceNavigationService } from '../../services/voice-navigation.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButton],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export default class About {

  constructor(private voiceNav: VoiceNavigationService) { }
  start() {
    this.voiceNav.startListening();
  }

  stop() {
    this.voiceNav.stopListening();
  }

}
