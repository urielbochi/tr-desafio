import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import "./assetsList.css";
import GenericRenderComponent from "../DynamicComponents/genericRenderComponent";

function AssetsList() {
  const { assetsObjectProp } = useContext(MyContext);

  return (
    <div>
      <GenericRenderComponent // recebe as props e executa useEffect. Passa os dados adiante para outros componentes.
        objectProp={assetsObjectProp}
      />
    </div>
  );
}

export default AssetsList;
