import './App.css';
import Boton from './componentes/boton';
import BotonClear from './componentes/boton-clear';
import Pantalla from './componentes/pantalla';
import logo from './imagenes/Logo.png'
import { useState } from 'react';
import { evaluate } from 'mathjs'
import Logo from './componentes/logo';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    } else{
      alert('Ingrese valores!!');
    }
  };

  return (
    <div className="App">
      <Logo></Logo>
      <div className='calculator-contenedor'>
        <Pantalla input={input}/>
        <div className='row'>  
          <Boton manejarClic={agregarInput}> 1 </Boton>
          <Boton manejarClic={agregarInput}> 2 </Boton>
          <Boton manejarClic={agregarInput}> 3 </Boton>
          <Boton manejarClic={agregarInput}> + </Boton>
        </div>
        <div className='row'>
          <Boton manejarClic={agregarInput}> 4 </Boton>
          <Boton manejarClic={agregarInput}> 5 </Boton>
          <Boton manejarClic={agregarInput}> 6 </Boton>
          <Boton manejarClic={agregarInput}> - </Boton>
        </div>
        <div className='row'>
          <Boton manejarClic={agregarInput}> 7 </Boton>
          <Boton manejarClic={agregarInput}> 8 </Boton>
          <Boton manejarClic={agregarInput}> 9 </Boton>
          <Boton manejarClic={agregarInput}> * </Boton>
        </div>
        <div className='row'>
          <Boton manejarClic={calcularResultado}> = </Boton>
          <Boton manejarClic={agregarInput}> 0 </Boton>
          <Boton manejarClic={agregarInput}> . </Boton>
          <Boton manejarClic={agregarInput}> / </Boton>
        </div>
        <div className='row'>
          <BotonClear manejarClear={() => setInput('')} >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
