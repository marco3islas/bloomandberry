import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VoiceNavigationService {
  private recognition: any;

  constructor(private router: Router, private ngZone: NgZone) {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'es-ES';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onresult = (event: any) => {
        const transcript: string = event.results[0][0].transcript.toLowerCase();
        console.log('Reconocido:', transcript);
        this.handleCommand(transcript);
      };

      this.recognition.onerror = (err: any) => {
        console.error('Error en reconocimiento de voz:', err);
      };
    } else {
      console.warn('Tu navegador no soporta SpeechRecognition');
    }
  }

  startListening() {
    if (this.recognition) {
      this.recognition.start();
    }
  }

  stopListening() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  private handleCommand(command: string) {
    this.ngZone.run(() => {
      if (command.includes('inicio')) {
        this.router.navigate(['/']);
      } else if (command.includes('about')) {
        this.router.navigate(['/about']);
      } else if (command.includes('contacto')) {
        this.router.navigate(['/contacto']);
      } else if (command.includes('productos')) {
        this.router.navigate(['/productos']);
      } else if (command.includes('subir')) {
        window.scrollBy({ top: -150, behavior: 'smooth' });
      } else if (command.includes('bajar')) {
        window.scrollBy({ top: 150, behavior: 'smooth' });
      } else {
        console.log('Comando no reconocido');
      }
    });
  }
}
