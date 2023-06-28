    export interface User {
        id: number;
        name: string;
        surname: string;
        email: string;
        address: Address
    }

    export interface Address {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
    }
    
    export interface Geo {
        lat: string;
        lng: string;
    }
    
    export interface Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }