import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import logo from './imagenes/Logo.png'

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Calculator-logo'
        />
      </div>
      <div className='calculator-contenedor'>
        <Pantalla/>
        <div className='row'>  
          <Boton> 1 </Boton>
          <Boton> 2 </Boton>
          <Boton> 3 </Boton>
          <Boton> + </Boton>
        </div>
        <div className='row'>
          <Boton> 4 </Boton>
          <Boton> 5 </Boton>
          <Boton> 6 </Boton>
          <Boton> - </Boton>
        </div>
        <div className='row'>
          <Boton> 7 </Boton>
          <Boton> 8 </Boton>
          <Boton> 9 </Boton>
          <Boton> * </Boton>
        </div>
        <div className='row'>
          <Boton> = </Boton>
          <Boton> 0 </Boton>
          <Boton> . </Boton>
          <Boton> / </Boton>
        </div>
        <div className='row'>
          
        </div>
      </div>
    </div>
  );
}

export default App;