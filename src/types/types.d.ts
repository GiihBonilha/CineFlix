export type Fruta = {
    id: string;
    nome: string;
}

export type Section = {
    title: string;
    data: Media[];
}

export type Media = {
    id: number;
    title?: string; 
    name?: string; 
    poster_path?: string;
    release_date?: string; 
    first_air_date?: string; 
    runtime?: number;
    episode_run_time?: number[]; 
    budget?: number;
    revenue?: number;
    status?: string;
    original_language?: string;
    vote_average?: number;
    overview?: string;
};
