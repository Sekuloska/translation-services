import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { SeoService } from "./seo-service";
import { Injectable } from "@angular/core";
import { filter, map, startWith } from "rxjs";
import { SeoConfig } from "./seo-model";



@Injectable({ providedIn: 'root' })
export class SeomanagerService {

    constructor(private router: Router,
        private route: ActivatedRoute,
        private seo: SeoService
    ){

        this.router.events
            .pipe( filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                    const leaf = this.getLeaf(this.route);
                    const config = leaf.snapshot.data['seo'] as SeoConfig | undefined;
                    if (config) this.seo.setTags(config);
            })
    }

    private getLeaf(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) route = route.firstChild;
    return route;
  }
}