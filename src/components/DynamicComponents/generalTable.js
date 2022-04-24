import React, { useEffect, useState } from "react";
import GlobalModal from "../Modal/globalModal";
import ScrollContainer from 'react-indiana-drag-scroll'
import GenericRenderById from "./genericRenderById";
import "../Actives/assetsList.css";

function GeneralTable({ objectProp }) {
  const { url, mainData, setMainData, urlRoute } = objectProp;
  const [addClass, setAddClass] = useState("");
  const [tableClass, setTableClass] = useState("");

  useEffect(() => {
    if (urlRoute === "companies") {
      setAddClass("companies__margin-fix");
    }
    else if (urlRoute === "units") {
      setAddClass("units__margin-fix")
    }
    else if (urlRoute === "assets") {
      setTableClass("table__assets-mobile")
    }
  }, []);
  const returnWhenRouteIs = () => {
    if (urlRoute === "assets") {
      return (
        <>
          <th>Nome</th>
          <th>ID</th>
          <th>Modelo</th>
          <th>Sensor</th>
          <th>Status</th>
          <th>Unidade</th>
          <th>Empresa</th>
        </>
      );
    } else if (urlRoute === "users") {
      return (
        <>
          <th>Nome</th>
          <th>Email</th>
          <th>ID</th>
          <th>Unidade</th>
          <th>Empresa</th>
        </>
      );
    } else if (urlRoute === "units") {
      return (
        <>
          <th>Nome</th>
          <th>ID</th>
          <th>Empresa</th>
        </>
      );
    } else if (urlRoute === "companies") {
      return (
        <>
          <th>Nome</th>
          <th>ID</th>
        </>
      );
    }
  };
  return (
    <div className={`table__overflow ${addClass}`}>
      <ScrollContainer className="scroll-container" nativeMobileScroll={false} vertical={true}>
      <table className={tableClass}>
        <thead>
          <tr>
            {returnWhenRouteIs()}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {mainData.map((item, index) => {
            return (
              <tr style={{ height: 50 }} className="border-bottom">
                <td>{item.name}</td>
                {urlRoute === "users" && <td>{item.email}</td>}
                <td>{item.id}</td>
                {urlRoute === "assets" && (
                  <>
                    <td>{item.model}</td>
                    <td>{item.sensors}</td>
                    <td>
                      {item.status === "inAlert"
                        ? "Alerta"
                        : item.status === "inDowntime"
                        ? "Desligado"
                        : item.status === "inOperation"
                        ? "Operando"
                        : ""}
                    </td>
                  </>
                )}
                {urlRoute === "assets" || urlRoute === "users" ? (
                  <td>{item.unitId}</td>
                ) : (
                  ""
                )}

                {urlRoute === "assets" ||
                urlRoute === "users" ||
                urlRoute === "units" ? (
                  <td>{item.companyId}</td>
                ) : (
                  ""
                )}
                <td className="buttons__crud-container">
                  <GlobalModal // render delete, update and view buttons~
                    id={item.id}
                    url={`${url}${item.id}`}
                    objectProp={objectProp}
                    position={index}
                    renderComponentView={
                      <GenericRenderById
                        id={item.id}
                        position={index}
                        mainData={mainData}
                        setMainData={setMainData}
                        urlRoute={urlRoute}
                      />
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </ScrollContainer>

    </div>
  );
}

export default GeneralTable;
