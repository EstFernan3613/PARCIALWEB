import React, { useState } from "react";

const Timer = () => {

    // Almacena los segundos que se ingresan y el tiempo final que tiene los parametros preestablecidos
    const [PonerSegundos, setPonerSegundos] = useState(""); 
    const [PonerTiempoFinal, setTiempoFinal] = useState({ horas: 0, minutos: 0, segundos: 0 });

    // Funcion que realiza la conversion de segundos a horas, minutos y segundos, esto se lo llama al boton
    const ConvertirTiempo = () => {
        // Calculo de Variables para obtener los segundos, y realizar las operaciones necesarias para calcular las horas, minutos y segundos
        const SegundosTotales = parseInt(PonerSegundos, 10);
        const horas = Math.floor(SegundosTotales / 3600);
        const minutos = Math.floor((SegundosTotales % 3600) / 60);
        const segundos = SegundosTotales % 60;

        // Actualiza el estado del tiempo Final con los valores calculados de tiempo
        setTiempoFinal({
            horas: horas,
            minutos: minutos,
            segundos: segundos
        });
        // Mostrar el resultado en la consola del navegador
         console.log(`Tiempo Convertido: Horas = ${horas}, Minutos = ${minutos}, Segundos = ${segundos}`);
    };

    return (
        <div>
            <h2>Convertidor de Tiempo - Punto 1</h2>
            <input
                type="number" 
                value={PonerSegundos}
                onChange={(e) => setPonerSegundos(e.target.value)}
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
    );
};

export default Timer;
