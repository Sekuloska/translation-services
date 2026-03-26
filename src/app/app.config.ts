import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withEnabledBlockingInitialNavigation } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara'
import { cookieConfig } from '../app/layouts/footer-component/cookies/cookie-config';

import { routes } from './app.routes';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';




export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Lara, // 🌞 Lara light по дифолт
        options: {
          darkModeSelector: false // осигурува дека е светла
        }
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' }), withEnabledBlockingInitialNavigation()),
    provideNgcCookieConsent(cookieConfig),
  ]
};
