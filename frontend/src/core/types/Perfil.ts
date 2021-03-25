export type Perfil = {
    access_token: string;
    userId: number;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    userName: string;    
}

export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    reviews: Review[];
}

export type Review = {
    id: number;
    text: string;
    movieId: number;
    user: User;    
}

export type User = {
    id: number;
    name: string;
    email: string;
}

export type Genre = {
    id: string;
    name: string;
}