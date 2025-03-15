//A játékokról való információk adatszerkezete
export interface IGamesDetails {
gameId: number; //Egyedi azonosító
wins: any;  //Elnyert díjak
nominations: any;   //Díjakra való jelölések
    title: string;  //Adott játék címe
    altTitle: string; //Adott játék alternatív címe
    description: string;    //Adott játék leírása
    boxart: string; //Adott játék borítóképe
    gallery: {url: string}[];   //Adott játékról képernyőképek
    release: string;    //Adott játék megjelenési dátuma
    developers: {id: number; name: string;}[];  //Adott játék fejlesztő studiója
    publishers: {id: number; name: string;}[];  //Adott játék kiadója
    rating: number; //Adott játék értékelése(like vagy dislike)
    agerating: {rating: string; institution: string; url?: string}[]; //Adott játék korhatár besorolása
    genres: {tag: string}[]; //Adott játék műfajokhoz tartozása
    controllerSupport: number;  //Adott játék játékvezérlői támogatások
    //Díjak és jelölések struktúrája
    awards: {
        nominations?: {
            organizer: string;  //Szervezet amely jelölte
            name: string;   //Díj neve
            'Games.Gamesaward.id': number;  //Díj azonosítója
            'Games.Gamesaward.year': number;    //Díj évszáma
        }[];
        wins?: {
            organizer: string;  //Szervezet amelytől van a díj
            name: string;   //Díj neve
            'Games.Gamesaward.id': number;  //Díj azonosító
            'Games.Gamesaward.year': number;    //Díj évszáma
        }[];
    };
    //Támogatott nyelvek (szinkron, felirat)
    languages?: {
        language: string;   //Nyelv neve
        'Games.Gameslanguage.id': number;   //Nyelv azonositója
        'Games.Gameslanguage.dub': number;  //1 = Dub, 0 = felirat
    }[];
    //Platformok ahol a játékok elérhetők
    platforms?: {
        platform: string;   //Platform neve (Xbox, PlayStation...stb)
    }[];
    crossplatform?: boolean | null; //Keresztplatform támogatás (igen vagy nem)
    crossPlatformException?: string | null; //Keresztplatform kivételek 
    //Színészek listája (szinkronhangok és szereplők)
    actors?: {
        id: number; //Színész azonosító
        firstName: string;  //Keresztnév
        lastName: string;   //Vezetéknév
        profilePicture: string; //Színész profilképe
        'Games.Acting.role': string;    //Szerepe az adott játékban
    }[];
    //Alkotók listája
    creators?: {
        id: number; //Alkotók azonosítója
        firstName: string;  //Keresztnév
        lastName: string;   //Vezetéknév
        'Games.Creation.field': string; //Milyen területen dolgozott az adott játék esetében
    }[];
    //PC rendszerkövetelmények
    pcspec?: {
        //Minimum specifikációk
        minop: string;
        mincpu: string;
        minram: string;
        mingpu: string;
        mindirectx: string;
        //Ajánlott specifikációk
        op: string;
        cpu: string;
        ram: string;
        gpu: string;
        directx: string;
        storage: string;
        sidenote: string;   //Egyéb megjegyzés (pl.: SSD Required)
    };

    //Adott játékhoz kapcsolódó kritikák
    reviews?: IReview[];
}

//Játék válasz struktúra
export interface IGamesResponse {
    error: boolean;
    message: string;
    datas: IGamesDetails;
}

//Értékelés válasz struktúra
export interface IRatingsResponse {
    error: boolean;
    message: string;
}

//Kritika válasz struktúra
export interface IReview {
    id: number;
    title: string;
    content: string;
    date: string;
    "User.username": string;
    "User.Ratings.id"?: number;
    "User.Ratings.positive": number;
}