import React, { useState } from "react";

const NumeroMayor = () => {
  const [primero, setPrimero] = useState(0);
  const [segundo, setSegundo] = useState(0);
  const [tercero, setTercero] = useState(0);

  let [mayor, setMayor] = useState(0);

  const CalculaMayor = () => {
    if (parseInt(primero) > parseInt(segundo) && parseInt(primero) > parseInt(tercero)) {
        setMayor( mayor = primero);
    } else {
      if (parseInt(segundo) > parseInt(tercero)) {
          setMayor(mayor=segundo)
      }else{
          setMayor(mayor=tercero)
      }
    }
  };

  return (
    <>
      <h2>NumeroMayor</h2>
      <input
        type="text"
        id="n1"
        name="n1"
        value={primero}
        onChange={(e) => setPrimero(e.target.value)}
      ></input>
      <input
        type="text"
        id="n2"
        name="n2"
        value={segundo}
        onChange={(e) => setSegundo(e.target.value)}
      ></input>
      <input
        type="text"
        id="n3"
        name="n3"
        value={tercero}
        onChange={(e) => setTercero(e.target.value)}
      ></input>
      <br></br>
      <button onClick={CalculaMayor}>Obtener Mayor</button>
      <h3>Numero Mayor: {mayor}</h3>
    </>
  );
};

export default NumeroMayor;
