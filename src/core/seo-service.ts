import { DOCUMENT, Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { SeoConfig } from "./seo-model";

@Injectable({ providedIn: 'root' })
export class SeoService{

    private readonly siteUrl = 'https://transhausa.com';
    private jsonLdEl?: HTMLScriptElement;

    constructor( 
        private title: Title,
        private meta: Meta,
        @Inject(DOCUMENT) private document: Document
    ){}

        //  title: string;
        // description: string;
        // canonicalPath?: string,
        // ogImage?: string;
        // ogTitle?: string;
        // ogDescription?: string;
        // ogUrl?: string;
        // ogType?: OgType,
        // robots?: RobotsValue,
        // jsonLd?: JsonLdType

    setTags(seo: SeoConfig) 
    {

        const canonicalUrl = new URL(seo.canonicalPath ?? '/', this.siteUrl).toString();

            this.title.setTitle(seo.title); 
            this.meta.updateTag({name: 'description', content:seo.description});
            this.meta.updateTag({name: 'robots', content: seo.robots ?? 'index,follow'})
            this.setCanonical(canonicalUrl);

            this.meta.updateTag({property: 'og:image', content: seo.ogImage});
            this.meta.updateTag({property: 'og:title', content: seo.ogTitle});
            this.meta.updateTag({property: 'og:description', content: seo.ogDescription});
            this.meta.updateTag({property: 'og:url', content: seo.ogUrl || canonicalUrl});
            this.meta.updateTag({property: 'og:type', content: seo.ogType || 'website'});

            
            this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
            this.meta.updateTag({ name: 'twitter:title', content: seo.title });
            this.meta.updateTag({ name: 'twitter:description', content: seo.description });
            this.meta.updateTag({ name: 'twitter:image', content: seo.ogImage });

            this.setJsonLd(seo.jsonLd)
    }

    private setCanonical(url: string): void{
                let link = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
            if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
            }
            link.setAttribute('href', url);
    }

    private setJsonLd(schema: unknown): void {

         const id = 'seo-jsonld';
        let script = this.document.getElementById(id) as HTMLScriptElement | null; 

      if(!script){
        script = this.document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        this.document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
        // if (!schema) return;

        // if(this.jsonLdEl) this.jsonLdEl.remove();

        // const normalizedSchema = this.normalizeJsonLd(schema);

        //  const el = this.document.createElement('script');
        //  el.type = 'application/ld+json';
        // el.text = JSON.stringify(normalizedSchema);
        // this.document.head.appendChild(el);
        // this.jsonLdEl = el;

    }

}