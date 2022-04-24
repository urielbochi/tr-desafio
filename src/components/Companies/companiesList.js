import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import GenericRenderComponent from "../DynamicComponents/genericRenderComponent";
function CompaniesList() {
  const { companiesObjectProp } = useContext(MyContext);
  return (
    <div>
      <GenericRenderComponent objectProp={companiesObjectProp} />
    </div>
  );
}

export default CompaniesList;
