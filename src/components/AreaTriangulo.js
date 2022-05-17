import React, { useState } from "react";

const AreaTriangulo = () => {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  let [area, setArea] = useState(0);

  const calcula = ()=>{
      area = base*altura/2;
      setArea(area);
  }
  return (
    <>
      <h2>AreaTriangulo</h2>
      <input
        type="text"
        id="base"
        name="base"
        value={base}
        onChange={(e) => setBase( e.target.value)}
      ></input>
      <input
        type="text"
        id="altura"
        name="altura"
        value={altura}
        onChange={(e) => setAltura( e.target.value)}
      ></input>
      <br></br>
      <button onClick={calcula}>Calcular area</button>
      <br></br>
      <h3>Area: {area}</h3>
    </>
  );
};

export default AreaTriangulo;
