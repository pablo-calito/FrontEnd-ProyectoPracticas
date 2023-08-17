import { useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  return (

    
    
      
    <div id='div-central' className='container'>
      <h1 className='col' id='bienvenido'> <strong>Bienvenido:</strong> </h1>
      <h3 id='texto'>En el siguiente formulario podremos llenar el formulario para participar en el evento de poesía:</h3>
      <button id='boton' onClick={() => navigate('/Formulario')} type="button" className="btn btn-primary">
        Llenar Formulario
      </button>
    </div>
    

  );
}

export default App;
