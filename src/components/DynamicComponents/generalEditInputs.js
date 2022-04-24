import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import "./generalEditInputs.css";

function GeneralEditInputs({ inputObject, setInputObject, urlRoute }) {
  const { assetsObj, setAssetsObj } = useContext(MyContext);

  //Como lidar com nested objects em Javascript https://www.youtube.com/watch?v=JqdlmW_olBc.
  // Me ajudou a construir as funções de handleChange
  const handleMetricsChange = ({ target }) => {
    const { name, value } = target;
    setAssetsObj({
      ...assetsObj,
      metrics: {
        ...assetsObj.metrics,
        [name]: parseInt(value),
      },
    });
  };

  const handleSpecificationsChange = ({ target }) => {
    const { name, value } = target;
    setAssetsObj({
      ...assetsObj,
      specifications: {
        ...assetsObj.specifications,
        [name]: value,
      },
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputObject({
      ...inputObject,
      [name]: value,
    });
  };

  return (
    <div className="assets__input">
      <input name="name" placeholder="Nome" onChange={handleChange} />
      {urlRoute === "assets" && (
        <>
          <select
            className="select__settings"
            name="status"
            onChange={handleChange}
          >
            <option value="inDowntime" selected>
              Desligado
            </option>
            <option value="inOperation">Operando</option>
            <option value="inAlert">Em alerta</option>
          </select>
          <input name="model" placeholder="Modelo" onChange={handleChange} />
          <input
            name="healthscore"
            placeholder="Saude"
            onChange={handleChange}
          />
          <input
            name="sensors"
            placeholder="Sensores"
            onChange={handleChange}
          />
          <input
            name="totalUptime"
            placeholder="Status"
            onChange={handleMetricsChange}
          />
          <input
            name="totalCollectsUptime"
            placeholder="Total de coletas"
            onChange={handleMetricsChange}
          />
          <input
            name="lastUptimeAt"
            placeholder="Status"
            onChange={handleMetricsChange}
          />
          <input
            name="maxTemp"
            placeholder="Temperatura máxima"
            onChange={handleSpecificationsChange}
          />
          <input
            name="power"
            placeholder="Poder"
            onChange={handleSpecificationsChange}
          />

          <input
            name="rpm"
            placeholder="RPM"
            onChange={handleSpecificationsChange}
          />

          <input name="image" placeholder="Imagem" onChange={handleChange} />
        </>
      )}
      {urlRoute === "assets" || urlRoute === "units" || urlRoute === "users" ? (
        <input name="companyId" placeholder="Empresa" onChange={handleChange} />
      ) : (
        ""
      )}
      {urlRoute === "assets" || urlRoute === "users" ? (
        <input name="unitId" placeholder="Unidade" onChange={handleChange} />
      ) : (
        ""
      )}
      {urlRoute === "users" && (
        <input name="email" placeholder="Email" onChange={handleChange} />
      )}
    </div>
  );
}
export default GeneralEditInputs;
