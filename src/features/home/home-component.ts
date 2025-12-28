import { Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-home-component',
  standalone: true,
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
  imports: [HeroSection, RouterOutlet]
})
export class HomeComponent{

}
