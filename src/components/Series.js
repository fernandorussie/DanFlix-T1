// imports
import React, { Component } from "react";
import ShowsApi from "../services/showsApi";

class Series extends Component {
  state = {
    series: [],
    filterList: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getSeries();
  }

  // Função que trás os dados da API
  getSeries = async () => {
    const response = await ShowsApi.get();
    
    const completeSeries = response.data.results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.overview,
        adult: item.adult,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      series: completeSeries,
      filterList: completeSeries
    });
  };


  handleChange = (e) =>{
    const filterDisplay = this.state.series.filter(item =>{
      if(item.name.toLowerCase().includes(e.target.value.toLowerCase())){
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
          <h2>SERIES</h2>
        </div>
        <div>
          <input type="text" onChange={this.handleChange}/>
        </div>
        <div>
          {this.state.filterList.map((item, id) => (
            <div key={id}>
              <p>{item.name}</p>
              <img style={{width:"40vw"}} src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Series;
