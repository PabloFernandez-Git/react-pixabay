import React, { Component } from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'
 

class App extends Component {

  state = {
    termino: '',
    imagenes: []
  }

  paginaAnterior = () => {
    console.log('Anterior...')
  }

  paginaSiguiente = () => {
    console.log('Siguiente...')
  }

  consultarApi = () => {

    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=17227505-5144ca8b6bc9b6f90b7a60061&q=${termino}&per_page=30`;

    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({ imagenes: resultado.hits }) ) 

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">

        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
  
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        
        <div className="row justify-content-center">
          <Resultado 
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>

      </div>
    );

  }
}

export default App;
