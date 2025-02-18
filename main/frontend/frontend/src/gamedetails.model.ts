export interface IGamesDetails {
    title: string;
    altTitle: string;
    description: string;
    boxart: string;
    gallery: {url: string}[];
    release: string;
    developers: {id: number; name: string; logo: string}[];
    publishers: {id: number; name: string; logo: string}[];
    rating: number;
    agerating: {rating: string; institution: string}[];
}

export interface IGamesResponse {
    error: boolean;
    message: string;
    datas: IGamesDetails;
}