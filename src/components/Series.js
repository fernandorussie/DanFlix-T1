// imports
import React, { Component } from "react";
import axios from "axios";

// url base da API que estamos consumindo
const SeriesApi = axios.create({
  baseURL: ""
});

class Series extends Component {
  state = {
    series: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getSeries();
  }

  // Função que trás os dados da API
  getSeries = async () => {
    const response = await SeriesApi.get();
    console.log("Series:", response.data.results);

    const completeSeries = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      series: completeSeries
    });
  };

  render() {
    return (
      <section>
        <div>
          <h2>SERIES</h2>
        </div>

        <div>
          {this.state.series.map((item, id) => (
            <div key={id}>
              <p>{item.name}</p>
              <p>{item.vote_average}</p>
              <img src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Series;
