import { Routes } from '@angular/router';
import { GlobalLayoutComponent } from './layouts/global-layout-component/global-layout-component';


export const routes: Routes = [
    {
        path: '',
        component: GlobalLayoutComponent, 
             children: [
                {
                    path: '',
                    title: 'Почетна • Transhausa',
                    loadComponent: () => import('../features/home/home-component').then(m => m.HomeComponent)
                },
                {
                    path: 'services',
                    title: 'Услуги • Transhausa',
                    loadComponent: () => import('../features/home/sections/services-section/services-section').then(m => m.ServicesSection)
                  },
                  {
                    path: 'our-story',
                    title: 'Наша приказна • Transhausa',
                    loadComponent: () => import('../features/home/sections/our-story-component/our-story-component').then(m => m.OurStoryComponent)
                  },
                   {
                    path: 'contact-us',
                    title: 'Контакт • Transhausa',
                    loadComponent: () => import('../features/home/sections/contact-us/contact-us').then(m => m.ContactUs)
                  },
                  {
                    path: 'privacy',
                    title: 'Приватност • Transhausa',
                    loadComponent: () => import('./layouts/footer-component/privacy/privacy').then(m => m.PrivacyComponent)
                  },
                  {
                    path: 'terms',
                    title: 'Услови • Transhausa',
                    loadComponent: () => import('./layouts/footer-component/terms/terms').then(m => m.TermsComponent)
                  },
                  {
                    path: 'cookies',
                    title: 'Колачиња • Transhausa',
                    loadComponent: () => import('./layouts/footer-component/cookies/cookies').then(m => m.CookiesComponent)
                  }

             ],
      },
];
