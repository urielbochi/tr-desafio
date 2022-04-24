import React, { useEffect, useState } from "react";
import "./globalViewCard.css";
import notFound from "../../images/notFound.png";

function GeneralViewCard({ parameter, urlRoute }) {
  const [color, setColor] = useState("");
  const [holderStatusValue, setHolderStatusValue] = useState("");
  const [border, setBorder] = useState("");
  // https://stackoverflow.com/questions/11770367/use-javascript-to-convert-a-date-string-with-timezone-to-a-date-object-in-local

  useEffect(() => {
    if (parameter.status === "inAlert") {
      setHolderStatusValue("Em alerta");
      setColor("red__text");
      setBorder("border__red");
    } else if (parameter.status === "inDowntime") {
      setHolderStatusValue("Em parada");
      setColor("yellow__text");
      setBorder("border__yellow");
    } else if (parameter.status === "inOperation") {
      setHolderStatusValue("Em operação");
      setColor("green__text");
      setBorder("border__green");
    }
  }, []);

  if (!parameter.metrics) {
    parameter.metrics = {
      totalCollectsUptime: "",
      lastUptimeAt: "",
      totalUptime: "",
    };
  }

  if (!parameter.specifications) {
    parameter.specifications = {
      maxTemp: "",
      power: "",
      rpm: "",
    };
  }

  const date = new Date(parameter.metrics.lastUptimeAt).toLocaleString("pt-BR");
  return (
    <div className="assets__card">
      {urlRoute === "assets" && (
        <>
          <img
            src={parameter.image ? parameter.image : notFound}
            className="assert__image-width"
            onError={(e) => {
              e.target.src = notFound; // some replacement image
            }}
          />
          <div className="asset__container">
            <div className="info">
              <p className="info-txt">Nome</p>
              <p className="assert__image-title">{parameter.name}</p>
            </div>
            <div className="info">
              <p className="info-txt">Modelo</p>
              <p className="assert__image-title">{parameter.model}</p>
            </div>
            <div className="info">
              <p className="info-txt">Sensores</p>
              <p className="assert__image-title">{parameter.sensors}</p>
            </div>
          </div>
          <div className="asset__container">
            <div className="info">
              <p className="info-txt">Status</p>
              <p className={color}>{holderStatusValue}</p>
            </div>
            <div className="info">
              <p className="info-txt">Vida</p>
              <div className={border + " healthscore"}>
                <p>{parameter.healthscore}%</p>
              </div>
            </div>
          </div>
          <div className="asset__container">
            {parameter.metrics.totalCollectsUptime && (
              <div className="info">
                <p className="info-txt">Coletas</p>
                <p>{parameter.metrics.totalCollectsUptime}</p>
              </div>
            )}
            <div className="info">
              <p className="info-txt">Tempo Operando</p>
              <p>
                {parseFloat(parameter.metrics.totalUptime).toFixed(2)} horas
              </p>
            </div>
          </div>
          <div className="asset__container">
            <div className="info">
              <p className="info-txt">Última Coleta</p>
              <p>{date}</p>
            </div>
          </div>
        </>
      )}
      {urlRoute === "users" && (
        <>
          <div className="info">
            <p>Nome</p>
            <p className="assert__image-title">{parameter.name}</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p className="assert__image-title">{parameter.email}</p>
          </div>
          <div className="info">
            <p>ID</p>
            <p className="assert__image-title">{parameter.id}</p>
          </div>
          <div className="info">
            <p>Unidade</p>
            <p className="assert__image-title">{parameter.unitId}</p>
          </div>
          <div className="info">
            <p>Empresa</p>
            <p className="assert__image-title">{parameter.companyId}</p>
          </div>
        </>
      )}
      {urlRoute === "units" && (
        <>
          <div className="info">
            <p>Nome</p>
            <p className="assert__image-title">{parameter.name}</p>
          </div>
          <div className="info">
            <p>Empresa</p>
            <p className="assert__image-title">{parameter.companyId}</p>
          </div>
          <div className="info">
            <p>ID</p>
            <p className="assert__image-title">{parameter.id}</p>
          </div>
        </>
      )}
      {urlRoute === "companies" && (
        <>
          <div className="info">
            <p>Nome</p>
            <p className="assert__image-title">{parameter.name}</p>
          </div>
          <div className="info">
            <p>ID</p>
            <p className="assert__image-title">{parameter.id}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default GeneralViewCard;
