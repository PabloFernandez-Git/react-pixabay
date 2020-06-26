import React, { Component } from 'react';
import Buscador from './components/Buscador'


class App extends Component {

  state = {
    termino: 'Cafe'
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
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
        
        {this.state.termino}
      
      </div>
    );

  }
}

export default App;
