import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { deletePost, editData } from "../../services/fetchAPI";
import { addEditConditionsAssets } from "../../services/generalFunctions";
import "./modalButtons.css";

function GlobalModal({ id, objectProp, renderComponentView, position }) {
  let {
    inputObject,
    setInputObject,
    mainData,
    setMainData,
    editRender,
    urlRoute,
  } = objectProp;
  const [showEditModal, setEditModal] = useState(false);
  const [showViewModal, setViewModal] = useState(false);
  const [addDisabled, setAddDisabled] = useState(true);
  const [classRoute, setClassRoute] = useState("");

  useEffect(() => {
    addEditConditionsAssets(inputObject, setAddDisabled, urlRoute);
  }, [inputObject]);

  useEffect(() => {
    if (urlRoute === "assets") {
      setClassRoute("modal__view-settings modal__view-assets-size");
    } else if (urlRoute === "users") {
      setClassRoute("modal__view-settings modal__view-users-size");
    } else if (urlRoute === "units") {
      setClassRoute("modal__view-settings modal__view-units-size");
    } else if (urlRoute === "companies") {
      setClassRoute("modal__view-settings modal__view-companies-size");
    }
  }, []);

  const renderEditModal = () => {
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const renderViewModal = () => {
    setViewModal(true);
  };

  const closeViewModal = () => {
    setViewModal(false);
  };

  return (
    <div>
      <i
        className="icons-size__assets fa-solid fa-pen-to-square fa-fw"
        onClick={() => renderEditModal()}
      />
      <Modal //edit button
        isOpen={showEditModal}
        onRequestClose={closeEditModal}
        className="modal__add-assets"
      >
        {editRender}
        <button
          disabled={addDisabled}
          className="modal__edit__button"
          onClick={() => {
            editData(
              id,
              urlRoute,
              inputObject,
              mainData,
              setMainData,
              position
            );
            closeEditModal();
            setInputObject({});
          }}
        >
          Editar
        </button>
        <button
          className="modal__edit__close__button"
          onClick={() => closeEditModal()}
        >
          Fechar
        </button>
      </Modal>
      <i
        className="icons-size__assets fa-solid fa-circle-info fa-fw"
        onClick={() => renderViewModal()}
      />
      <Modal //view button
        isOpen={showViewModal}
        onRequestClose={closeViewModal}
        className={classRoute}
      >
        {renderComponentView}
        <button
          className="modal__edit__close__button"
          onClick={() => closeViewModal()}
        >
          Fechar
        </button>
      </Modal>
      <i //delete button
        className="icons-size__assets fa-solid fa-trash-can fa-fw"
        onClick={() => deletePost(id, mainData, setMainData, urlRoute)}
      />
    </div>
  );
}

export default GlobalModal;
