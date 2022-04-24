import React, { useEffect } from "react";
import GeneralViewCard from "./generalViewCard";

function GenericRenderById({ position, mainData, setMainData, urlRoute }) {
  useEffect(() => {
    const currentSavedItemsData = JSON.parse(localStorage.getItem(urlRoute));
    setMainData(currentSavedItemsData);
  }, []);

  if (!mainData || mainData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <GeneralViewCard urlRoute={urlRoute} parameter={mainData[position]} />
    </div>
  );
}

export default GenericRenderById;
