import "./ImcForm.css";
import { useState } from "react";
import ClassifyImc from "./ClassifyImc";

const MyImcForm = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState(null);

  const ImcCalcule = () => {
    const heightNumberFloat = +height.replace(",", ".");
    const weightNumberFloat = +weight.replace(",", ".");
    if (heightNumberFloat > 0 && weightNumberFloat > 0) {
      const heightInMeters = heightNumberFloat / 100;
      const calculatedImc =
        weightNumberFloat / (heightInMeters * heightInMeters);
      setImc(Number(calculatedImc.toFixed(2)));

      setHeight("");
      setWeight("");
    } else {
      alert("Por favor, insira valores válidos para altura e peso.");
    }
  };

  const validArguments = (value) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleValiHeight = (e) => {
    const validHeight = validArguments(e.target.value);
    setHeight(validHeight);
  };

  const handleValiWeight = (e) => {
    const validWeight = validArguments(e.target.value);
    setWeight(validWeight);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Calculadora de IMC</h1>

        <div className="input-group">
          <label htmlFor="altura">Altura(cm)</label>
          <input
            type="text"
            id="altura"
            placeholder="Ex: 175"
            value={height}
            onChange={(e) => handleValiHeight(e)}
          />
        </div>
        <div className="input-group">
          <label className="segundLabel" htmlFor="peso">
            Peso(kg)
          </label>
          <input
            type="text"
            id="peso"
            placeholder="Ex: 70"
            value={weight}
            onChange={(e) => handleValiWeight(e)}
          />
        </div>

        <div className="container-button">
          <button type="button" onClick={ImcCalcule}>
            Calcular
          </button>
        </div>

        <div className="result">
          <h2>Resultados</h2>
          <p>Seu IMC é: {imc}</p>
          {imc && <ClassifyImc key={imc} imcUser={imc} />}
        </div>
      </div>
    </div>
  );
};

export default MyImcForm;
