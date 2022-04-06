import axios from "axios";

// url base da API que estamos consumindo
const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=ff9ba989fdb65bb8adf19b8a5c5e0b7a&language=pt-BR&page=1"
});

export default MoviesApi