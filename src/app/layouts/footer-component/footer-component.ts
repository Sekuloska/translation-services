import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy';
import { TermsComponent } from './terms/terms';
import { CookiesComponent } from './cookies/cookies';

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent {

}
