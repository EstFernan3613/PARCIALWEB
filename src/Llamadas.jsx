import React, { useState } from "react";

const Llamadas = () => {
    const [DuracionLlamada, setDuracionLlamada] = useState();
    const [CostoTotal, setCostoTotal] = useState()
    const CalcularCostoLLamada = () => {
    const MinutosLlamada = parseInt(DuracionLlamada, 10);

    if (MinutosLlamada <= 3) {
      setCostoTotal(100);
    } else {
      const MinutosAdicionales = MinutosLlamada - 3;
      const CostoNuevo = 100 + MinutosAdicionales * 50;
      setCostoTotal(CostoNuevo);
    }

    console.log(`Total a pagar: ${CostoTotal} Pesos`)
  }

  return (
    <div>
      <h2>Costo de una llamada telefonica - CLARO COLOMBIA - Punto 2</h2>
      <h3>Ingresa la duracion de tu llamada en minutos</h3>
        <input
        type="number"
        value={DuracionLlamada}
        onChange={(event) => setDuracionLlamada(event.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={CalcularCostoLLamada}>Conoce el costo de tu llamada!</button>
        <div>
        <p>Total a pagar: {CostoTotal} Pesos</p>
        </div>
    </div>
  )
}

export default Llamadas;


