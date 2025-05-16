import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '81d286ee9e7e1d8f61d78c5ef0741053',
        language: 'pt-BR'
    }
})


// ================== Filmes ==================


// Lista de Filmes Populares
export const getPopularMovie =  async () => {
    const response = await api.get('/movie/popular');
    return response.data.results;
}

// Lista de Filmes Em Cartaz
export const getNowPlaying =  async () => {
    const response = await api.get('/movie/now_playing');
    return response.data.results;
}

// Lista de Filmes Melhores Avaliados
export const getTopRated =  async () => {
    const response = await api.get('/movie/top_rated');
    return response.data.results;
}

// Lista de Filmes Em Breve
export const getUpcomingMovie =  async () => {
    const response = await api.get('/movie/upcoming');
    return response.data.results;
}

// Pega as informações de um filme ou série específico 
export const getDetailsMedia = async (id: number, type: "movie" | "tv") => {
    const response = await api.get(`/${type}/${id}`);
    return response.data;
};




// ================== Séries ==================


// Séries em exibição hoje
export const getAiringTodaySeries = async () => {
    const response = await api.get('/tv/airing_today');
    return response.data.results;
}

// Séries que estão no ar
export const getOnTheAirSeries = async () => {
    const response = await api.get('/tv/on_the_air');
    return response.data.results;
}

// Séries populares
export const getPopularSeries = async () => {
    const response = await api.get('/tv/popular');
    return response.data.results;
}

// Séries mais bem avaliadas
export const getTopRatedSeries = async () => {
    const response = await api.get('/tv/top_rated');
    return response.data.results;
}
