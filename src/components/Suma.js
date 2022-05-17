import React, { useState } from "react";

export default function Suma() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  let [resultado, setResultado] = useState(0);
  const sumar =()=>setResultado( resultado = n1 + n2);

  return (
    <>
      <h2>Suma</h2>
      <label htmlFor="numero1">Numero 1</label>
      <input
        type="text"
        id="n1"
        name="n1"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      ></input>
      <input
        type="text"
        id="n2"
        name="n2"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      ></input>
      <button onClick={sumar}>Sumar</button>
      <input type="text" value={resultado} />
      <h3>{resultado}</h3>
    </>
  );
}
