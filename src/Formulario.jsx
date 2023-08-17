import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Formulario = () => {

    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (
        <div id='div-formulario'>

            <h1 id='formulario'>Formulario:</h1>


            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Carnet:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Nombre Completo:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Dirección</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Genero:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Telefono:</span>
                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Fecha de Nacimiento:</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Carrera del Estudiante:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Genero de poesía:</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div  class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Fecha de inscripcion;</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <button id='boton' onClick={() => navigate('/App')} type="button" className="btn btn-primary">
                Enviar Formulario
            </button>

        </div>
    )
}

export default Formulario;
