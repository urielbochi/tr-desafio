import axios from "axios";

export async function fetchAPI(url) {
  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
}

export function postData(urlRoute, inputObject, mainData, setMainData) {
  let newData = [...mainData];
  if (mainData.length === 0) {
    inputObject.id = 1;
  } else {
    inputObject.id = mainData[mainData.length - 1].id + 1;
  }
  newData.push(inputObject);
  setMainData(newData);
  verifyLocalStorageRoute(newData, urlRoute);
}

export function deletePost(id, mainData, setMainData, urlRoute) {
  // Como utilizar o splice https://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
  const newData = [...mainData];
  const findIndex = newData.findIndex((item) => item.id === id);
  newData.splice(findIndex, 1);
  setMainData(newData);
  verifyLocalStorageRoute(newData, urlRoute);
}

export function editData(
  id,
  urlRoute,
  dynamicObject,
  mainData,
  setMainData,
  position
) {
  let newData = [...mainData];
  const findIndex = newData.findIndex((item) => item.id === id);
  newData[findIndex] = dynamicObject;
  dynamicObject.id = id;
  setMainData(newData);
  verifyLocalStorageRoute(newData, urlRoute);
}

function verifyLocalStorageRoute(newData, urlRoute) {
  if (urlRoute === "assets") {
    localStorage.setItem("assets", JSON.stringify(newData));
  } else if (urlRoute === "users") {
    localStorage.setItem("users", JSON.stringify(newData));
  } else if (urlRoute === "units") {
    localStorage.setItem("units", JSON.stringify(newData));
  } else if (urlRoute === "companies") {
    localStorage.setItem("companies", JSON.stringify(newData));
  }
}
