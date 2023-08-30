import React, { useState } from "react";

const Bienvenida = () => {

    const [Nombre, setNombre] = useState("");
    const [Hora, setHora] = useState("");
    const [Saludo, setSaludo] = useState("");

    const HacerSaludo = () => {
        const horaDada = parseInt(Hora);

        if(horaDada >= 0 && horaDada <13){
            setSaludo(`Buenos Dias, ${Nombre}`);
        } else if(horaDada >=13 && horaDada <19){
            setSaludo(`Buenas Tardes, ${Nombre}`);
        } else {
            setSaludo(`Buenas Noches, ${Nombre}`);
        }

        console.log(Saludo);
    }

    return (
        <>
            <h2>Saludo Basado en la Hora Actual - Punto 3</h2>
            <h3>Ingrese su nombre y su hora actual en el Formato 24 Horas</h3>
            <h4>Ingrese su Nombre</h4>
            <input
                type="text"
                value={Nombre}
                onChange={(event) => setNombre(event.target.value)}
            />
            <br></br>
            <h4>Ingrese su Hora Actual (FORMATO 24 HORAS - SOLO EL NUMERO)</h4>
            <input
                type="number"
                value={Hora}
                onChange={(event) => setHora(event.target.value)}
            />
            <br></br>
            <br></br>
            <button onClick={HacerSaludo}>Obtenga su Saludo Personalizado!</button>
            <div>
                <p>{Saludo}</p>
            </div>        
        </>
        )
}
export default Bienvenida;