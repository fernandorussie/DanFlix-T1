import axios from "axios";

// url base da API que estamos consumindo
const ShowsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=0f6296ac61ec5966cd4f6b9f39a2b01c&language=pt-BR&page=1"
});

export default ShowsApi