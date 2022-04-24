import React, { useEffect } from "react";
import { recoverFromLocalStorage } from "../../services/generalFunctions";
import AddAndResetModal from "../Modal/addAndResetModal";
import GeneralTable from "./generalTable";

function GenericRenderComponent({ objectProp }) {
  const { url, setMainData, urlRoute, mainData } = objectProp;

  useEffect(async () => {
    recoverFromLocalStorage(url, urlRoute, setMainData);
  }, []);

  if (!mainData) {
    return <div>Loading...</div>;
  }

  // Utilizei a lib https://github.com/reactjs/react-modal para o modal

  return (
    <div>
      <AddAndResetModal // adicionar / reiniciar
        objectProp={objectProp}
      />
      <div className="assets__main">
        <GeneralTable // tabela
          objectProp={objectProp}
        />
      </div>
    </div>
  );
}

export default GenericRenderComponent;
