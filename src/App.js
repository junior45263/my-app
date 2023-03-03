import { useState } from 'react';
import './App.css';
import Cartas from './Cartas';
import Navegacion from './Navegacion';
import Pie from './Pie';

function App() {

  return (
    <div className='App'>
      <Navegacion/>
      <Cartas/>
  

      <Pie/>

    </div>
  )

}

export default App;
