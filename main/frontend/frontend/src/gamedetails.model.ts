export interface IGamesDetails {
wins: any;
nominations: any;
    title: string;
    altTitle: string;
    description: string;
    boxart: string;
    gallery: {url: string}[];
    release: string;
    developers: {id: number; name: string;}[];
    publishers: {id: number; name: string;}[];
    rating: number;
    agerating: {rating: string; institution: string; url?: string}[];
    genres: {tag: string}[];
    controllerSupport: number;
    awards: IGamesDetails;
}

export interface IGamesResponse {
    error: boolean;
    message: string;
    datas: IGamesDetails;
}