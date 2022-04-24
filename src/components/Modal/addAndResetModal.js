import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { postData } from "../../services/fetchAPI";
import {
  addEditConditionsAssets,
  resetLocalStorageData,
} from "../../services/generalFunctions";
import "./modalAddAssets.css";
import "./modalEdit.css";

function AddAndResetModal({ objectProp }) {
  const [showModal, setShowModal] = useState(false);
  const [addDisabled, setAddDisabled] = useState(true);
  const {
    url,
    inputObject,
    setInputObject,
    mainData,
    setMainData,
    editRender,
    urlRoute,
  } = objectProp;

  Modal.setAppElement("body");
  const renderForm = () => {
    setShowModal(true);
  };

  const closeForm = () => {
    setShowModal(false);
  };

  useEffect(() => {
    addEditConditionsAssets(inputObject, setAddDisabled, urlRoute);
  }, [inputObject]);

  return (
    <div>
      <button
        className="modal__general__first-button"
        onClick={() => renderForm()}
      >
        Adicionar novo
      </button>
      <button
        className="modal__general__first-button"
        onClick={() => resetLocalStorageData(url, setMainData, urlRoute)}
      >
        Reiniciar
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeForm}
        className="modal__add-assets"
      >
        {editRender}
        <button
          disabled={addDisabled}
          className="modal__general__second-button"
          onClick={() => {
            postData(urlRoute, inputObject, mainData, setMainData);
            setInputObject({});
            closeForm();
          }}
        >
          Adicionar
        </button>
        <button
          className="modal__general__second-button button__red-color"
          onClick={() => closeForm()}
        >
          Fechar
        </button>
      </Modal>
    </div>
  );
}

export default AddAndResetModal;
