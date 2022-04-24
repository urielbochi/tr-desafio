import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import "./userList.css";
import GenericRenderComponent from "../DynamicComponents/genericRenderComponent";

function UsersList() {
  const { userObjectProp } = useContext(MyContext);

  return (
    <div>
      <div>
        <GenericRenderComponent // recebe as props e executa useEffect. Passa os dados adiante para outros componentes.
          objectProp={userObjectProp}
        />
      </div>
    </div>
  );
}

export default UsersList;
