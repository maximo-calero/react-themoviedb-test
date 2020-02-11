export interface Configuration {
    images: Images;
    changeKeys: any;
}

interface Images {
    baseUrl: string;
    secureBaseUrl: string;
    backdropSizes: any;
    logoSizes: any;
    posterSizes: any;
    profileSizes: any;
    stillSizes: any;
}