// imports
import React, { Component } from "react";
import MoviesApi from "../services/moviesApi";

class Movies extends Component {
  state = {
    movies: [],
    filterList: []
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
        id: item.id,
        title: item.title,
        description: item.overview,
        adult: item.adult,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: completeMovies,
      filterList: completeMovies
    });
  };


  handleChange = (e) =>{
    const filterDisplay = this.state.movies.filter(item =>{
      if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return true
      }
    })
    this.setState({
      filterList: filterDisplay
    })
  }

  render() {
    return (
      <section>
        <div>
          <h2>FILMES</h2>
        </div>
        <div>
          <input type="text" onChange={this.handleChange}/>
        </div>
        <div>
          {this.state.filterList.map((item, id) => (
            <div key={id}>
              <p>{item.title}</p>
              <img style={{width:"40vw"}} src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Movies;
