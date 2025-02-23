export interface IGamesDetails {
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
}

export interface IGamesResponse {
    error: boolean;
    message: string;
    datas: IGamesDetails;
}