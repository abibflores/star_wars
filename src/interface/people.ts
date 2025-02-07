export interface People {
    name: string;
    gender: string;
    birth_year: string;
    homeworld: string;
    url: string;
};

export interface Character extends People {
    height: string;
    mass: string;
}