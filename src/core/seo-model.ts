export type OgType = 'website' | 'article' | 'profile' | 'business.business'; 


export interface OrganizationJsonLd {
    // 
}


export interface SeoConfig {
    title: string;
    description: string;
    canonicalPath?: string,
    ogImage: string;
    ogTitle: string;
    ogDescription: string;
    ogUrl: string;
    ogType: OgType,
    robots: string,
    jsonLd: OrganizationJsonLd

}