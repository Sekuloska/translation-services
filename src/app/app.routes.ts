import { Routes } from '@angular/router';
import { GlobalLayoutComponent } from './layouts/global-layout-component/global-layout-component';


export const routes: Routes = [
    {
        path: '',
        component: GlobalLayoutComponent, 
             children: [
                {
                    path: '',
                    title: 'Почетна • Трансхауса',
                    loadComponent: () => import('../features/home/home-component').then(m => m.HomeComponent),
                    data: {
                        seo: {
                            title: 'Судски Преводи МК | Преведувачки услуги од овластен судски преведувач - Трансхауса',
                            description: 'Трансхауса - Професионални судски преводи на правни, академски, деловни и други видови на документи од македонски на англиски јазик и обратно и од македонски на српски јазик и обратно.',
                            canonicalPath: '/',
                            author:'Трансхауса - Судски Преводи МК | Преведувачки услуги од овластен судски преведувач - Трансхауса',
                            ogTitle: 'Судски Преводи МК | Преведувачки услуги од овластен судски преведувач - Трансхауса',
                            ogDescription: 'Трансхауса Професионални судски преводи на правни, академски, деловни и други видови на документи од македонски на англиски јазик и обратно и од македонски на српски јазик и обратно.',
                            ogImage: 'https://transhausa.com/assets/hero-section-image.jpg',
                            ogUrl: 'https://transhausa.com',
                            ogType: 'webiste',
                            robots: 'index,follow',
                            jsonLd: {
                                "@context": "https://schema.org",
                                "@type": 'LocalBusiness',
                                "name": 'Судски Преводи МК | Преведувачки услуги од овластен судски преведувач - Трансхауса',
                                "description": "Професионални судски преводи на правни, академски, деловни и други видови на документи од македонски на англиски јазик и обратно и од македонски на српски јазик и обратно.",
                                "url": "https://transhausa.com",
                                "@id": "https://transhausa.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Skopje",
                                    "addressCountry": "MK"
                                },
                                "hasOfferCatalog": {
                                              "@type": "OfferCatalog",
                                              "name": "Преведувачки услуги",
                                              "itemListElement": [
                                                {
                                                  "@type": "Offer",
                                                  "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Правни преводи",
                                                    "description": "Овластени судски преводи на правни документи",
                                                    "serviceType": "Legal Translation",
                                                    "availableLanguage": ["mk", "en", "al", "de", "fr", "it", "es", "tr", "sr", "hr", "sl", "gr"]
                                                  }
                                                },
                                                {
                                                  "@type": "Offer",
                                                  "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Академски преводи",
                                                    "description": "Преводи на дипломи, сертификати и академски документи",
                                                    "serviceType": "Academic Translation",
                                                    "availableLanguage": ["mk", "en", "al", "de", "fr", "it", "es", "tr", "sr", "hr", "sl", "gr"]
                                                  }
                                                },
                                                {
                                                  "@type": "Offer",
                                                  "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Деловни преводи",
                                                    "description": "Преводи на деловни документи и договори",
                                                    "serviceType": "Business Translation",
                                                  "availableLanguage": ["mk", "en", "al", "de", "fr", "it", "es", "tr", "sr", "hr", "sl", "gr"]
                                                  }
                                                }
                                              ]
                                      },
                            }
                        }
                  }
                },
                  {
                    path: 'services',
                    title: 'Услуги • Трансхауса',
                    data: {
                      seo: {
                        title: 'Услуги • Трансхауса - Превод на документи, локализација, судски заверен превод, лектура, усно преведување, титлување',
                        description: 'Услуги за преводи на документи, аудио, видеа и локализација на апликации. Брзи, точни и професионални преводи од повеќе јазици.',
                        canonicalPath: '/services',
                        author: 'Трансхауса - Услуги',
                        ogTitle: 'Услуги на Трансхауса',
                        ogDescription: 'Професионални преводи за правни, деловни и технички текстови.',
                        ogImage: 'https://transhausa.com/assets/hero-section-image.jpg',
                        ogUrl: 'https://transhausa.com/services',
                        ogType: 'website',
                        robots: 'index,follow',
                        jsonLd: {
                          "@context": "https://schema.org",
                          "@type": 'LocalBusiness',
                          "name": 'Трансхауса Услуги на превод',
                          "description": 'Услуги за превод на правни, академски и деловни документи.',
                          "url": 'https://transhausa.com/services',
                          "@id": 'https://transhausa.com/services',
                          "address": {
                            "@type": 'PostalAddress',
                            "addressLocality": 'Skopje',
                            "addressCountry": 'MK'
                          },
                          "hasOfferCatalog": {
                            "@type": 'OfferCatalog',
                            "name": 'Список на услуги',
                            "itemListElement": [
                              {
                                "@type": 'Offer',
                                "itemOffered": {
                                  "@type": 'Service',
                                  "name": 'Правни преводи'
                                }
                              },
                              {
                                "@type": 'Offer',
                                "itemOffered": {
                                  "@type": 'Service',
                                  "name": 'Академски преводи'
                                }
                              },
                              {
                                "@type": 'Offer',
                                "itemOffered": {
                                  "@type": 'Service',
                                  "name": 'Деловни преводи'
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    loadComponent: () => import('../features/home/sections/services-section/services-section').then(m => m.ServicesSection)
                  },
                  {
                    path: 'our-story',
                    title: 'Наша приказна • Трансхауса',
                    data: {
                      seo: {
                        title: 'Наша приказна • Трансхауса',
                        description: 'Запознајте се со нашата визија, тим и предавачки процес. Вашите документи во сигурни раце – точни преводи од овластени судски преведувачи.',
                        canonicalPath: '/our-story',
                        author: 'Трансхауса - Наша приказна',
                        ogTitle: 'Наша приказна — Трансхауса',
                        ogDescription: 'Прочитајте ја историјата, мисијата и вредностите на Трансхауса.',
                        ogImage: 'https://transhausa.com/assets/hero-section-image.jpg',
                        ogUrl: 'https://transhausa.com/our-story',
                        ogType: 'website',
                        robots: 'index,follow',
                        jsonLd: {
                          "@context": "https://schema.org",
                          "@type": 'Organization',
                          "name": 'Трансхауса',
                          "description": 'Историја и цели на преведувачката агенција Трансхауса.',
                          "url": 'https://transhausa.com/our-story',
                          "logo": 'https://transhausa.com/assets/logo.png',
                          "address": {
                            "@type": 'PostalAddress',
                            "addressLocality": 'Skopje',
                            "addressCountry": 'MK'
                          }
                        }
                      }
                    },
                    loadComponent: () => import('../features/home/sections/our-story-component/our-story-component').then(m => m.OurStoryComponent)
                  },
                  {
                    path: 'contact-us',
                    title: 'Контакт • Трансхауса',
                    data: {
                      seo: {
                        title: 'Контакт • Трансхауса',
                        description: 'Контактирајте не за преводи, прашања, цени на преводи. Нашиот тим е достапен за поддршка.',
                        canonicalPath: '/contact-us',
                        author: 'Трансхауса - Контакт',
                        ogTitle: 'Контакт - Трансхауса',
                        ogDescription: 'Најбрз начин да добиете понуда за превод и да поставите прашања.',
                        ogImage: 'https://transhausa.com/assets/contact-cover.jpg',
                        ogUrl: 'https://transhausa.com/contact-us',
                        ogType: 'website',
                        robots: 'index,follow',
                        jsonLd: {
                          "@context": "https://schema.org",
                          "@type": 'ContactPage',
                          "name": 'Трансхауса Контакт',
                          "description": 'Контакт страница за поддршка на услуги и прашања.',
                          "url": 'https://transhausa.com/contact-us'
                        }
                      }
                    },
                    loadComponent: () => import('../features/home/sections/contact-us/contact-us').then(m => m.ContactUs)
                  },
                  {
                    path: 'privacy',
                    title: 'Приватност • Трансхауса',
                    loadComponent: () => import('./layouts/footer-component/privacy/privacy').then(m => m.PrivacyComponent)
                  },
                  {
                    path: 'terms',
                    title: 'Услови • Трансхауса',
                    loadComponent: () => import('./layouts/footer-component/terms/terms').then(m => m.TermsComponent)
                  },
                  {
                    path: 'cookies',
                    title: 'Колачиња • Трансхауса',
                    loadComponent: () => import('./layouts/footer-component/cookies/cookies').then(m => m.CookiesComponent)
                  }

             ],
      },
];
