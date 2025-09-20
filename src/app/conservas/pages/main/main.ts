import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-main',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export default class Main {

}
