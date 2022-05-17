import React, { useState } from "react";

const Factorial = () => {
  let [numero, setNumero] = useState(1);
  let [resultado, setResultado] = useState(0);

  const Factorial = () => {
    let fact = 1;
    for (let i = 1; i <= parseInt(numero); i++) {
      fact = fact * i;
    }
    setResultado(parseInt(fact));
  };

  return (
    <>
      <h2>Factorial</h2>
      <label>Ingresa un Numero</label>
      <input
        type="text"
        id="numero"
        name="numero"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      ></input>
      <button onClick={Factorial}>Factorial</button>
      <h3>Resultado: {resultado}</h3>
    </>
  );
};

export default Factorial;
