import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import GenericRenderComponent from "../DynamicComponents/genericRenderComponent";

function UnitsList() {
  const { unitsObjectProp } = useContext(MyContext);

  return (
    <div>
      <GenericRenderComponent // recebe as props e executa useEffect. Passa os dados adiante para outros componentes.
        objectProp={unitsObjectProp}
      />
    </div>
  );
}

export default UnitsList;
