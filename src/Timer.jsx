import React, { useState } from "react";

const Timer = () => {

    const [PonerSegundos, setPonerSegundos] = useState(""); 
    const [PonerTiempoFinal, setTiempoFinal] = useState({ horas: 0, minutos: 0, segundos: 0 });


    const ConvertirTiempo = () => {

        const SegundosTotales = parseInt(PonerSegundos, 10);
        const horas = Math.floor(SegundosTotales / 3600);
        const minutos = Math.floor((SegundosTotales % 3600) / 60);
        const segundos = SegundosTotales % 60;

        
        setTiempoFinal({
            horas: horas,
            minutos: minutos,
            segundos: segundos
        });

         console.log(`Tiempo Convertido: Horas = ${horas}, Minutos = ${minutos}, Segundos = ${segundos}`);
    }

    return (
        <div>
            <h1>PARCIAL CORTE 1 - DESARROLLO WEB - JUAN ESTEBAN FERNANDEZ CUERVO - 2211239</h1>
            <h2>Convertidor de Tiempo - Punto 1</h2>
            <h3>Ingresa los Segundos a Convertir</h3>
            <input
                type="number" 
                value={PonerSegundos}
                onChange={(event) => setPonerSegundos(event.target.value)}
            />
            <br></br>
            <br></br>
            <button onClick={ConvertirTiempo}>Convertir</button>
            <div>
            <p>
                Tiempo Convertido: Horas = {PonerTiempoFinal.horas} , Minutos = {PonerTiempoFinal.minutos} , Segundos =  {PonerTiempoFinal.segundos}
            </p>
            </div>
        </div>
    )
}

export default Timer;
