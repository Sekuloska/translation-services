import {NgcCookieConsentConfig} from 'ngx-cookieconsent';

export const cookieConfig : NgcCookieConsentConfig  ={
  "cookie": {
    "domain": "tinesoft.github.io"
  },
  "position": "bottom-right",
  "theme": "block",
  "palette": {
    "popup": {
      "background": "#f56fa1",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#ffffff",
      "text": "#f56fa1",
      "border": "transparent"
    }
  },
  "type": "opt-in",
  "content": {
    "message": "Користиме колачиња за да обезбедиме правилно функционирање на веб-страницата и со ваша согласност да анализираме како се користи за да ја подобриме. Вашите поставки можете да ги промените во секое време.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "https://transhausa.com",
    "policy": "Cookie Policy"
  
}
}