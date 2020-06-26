import React from 'react';
import Buscador from './components/Buscador'


function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>

        <Buscador />
      </div>
    </div>
  );
}

export default App;
