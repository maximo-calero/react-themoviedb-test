export interface Configuration {
    images: Images;
    changeKeys: string[];
}

interface Images {
    baseUrl: string;
    secureBaseUrl: string;
    backdropSizes: string[];
    logoSizes: string[];
    posterSizes: string[];
    profileSizes: string[];
    stillSizes: string[];
}