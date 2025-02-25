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
    awards: {
        nominations?: {
            organizer: string;
            name: string;
            'Games.Gamesaward.id': number;
            'Games.Gamesaward.year': number;
        }[];
        wins?: {
            organizer: string;
            name: string;
            'Games.Gamesaward.id': number;
            'Games.Gamesaward.year': number;
        }[];
    };
    languages?: {
        language: string;
        'Games.Gameslanguage.id': number;
        'Games.Gameslanguage.dub': number;
    }[];
    platforms?: {
        platform: string;
    }[];
    crossplatform?: boolean | null;
    crossPlatformException?: string | null;
    actors?: {
        id: number;
        firstname: string;
        lastname: string;
        profilepicture: string;
    }[];
    creators?: {
        id: number;
        firstname: string;
        lastname: string;
    }[];
}

export interface IGamesResponse {
    error: boolean;
    message: string;
    datas: IGamesDetails;
}