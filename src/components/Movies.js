// imports
import React, { Component } from "react";
import MoviesApi from "../services/moviesApi";

class Movies extends Component {
  state = {
    movies: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getMovies();
  }

  // Função que trás os dados da API
  getMovies = async () => {
    const response = await MoviesApi.get();

    const completeMovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: completeMovies
    });
  };

  render() {
    return (
      <section>
        <div>
          <h2>FILMES</h2>
        </div>

        <div>
          {this.state.movies.map((item, id) => (
            <div key={id}>
              <p>{item.title}</p>
              <p>{item.vote_average}</p>
              <img src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Movies;
