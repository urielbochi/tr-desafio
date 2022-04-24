import { fetchAPI } from "./fetchAPI";

export async function resetLocalStorageData(url, setMainData, urlRoute) {
  const data = await fetchAPI(url);
  setMainData(data);
  localStorage.setItem(urlRoute, JSON.stringify(data));
}
// recupera do localStorage se existir, se não existir, realiza o fetch e manda para o local.
export function recoverFromLocalStorage(url, urlRoute, setMainData) {
  const localStorageData = localStorage.getItem(urlRoute);
  const recoverDataFromLocalStorage = JSON.parse(
    localStorage.getItem(urlRoute)
  );

  // se o local estiver preenchido, recupera dele
  if (localStorageData) {
    setMainData(recoverDataFromLocalStorage);
    // caso contrário, faz fetch e seta no local~
  } else {
    resetLocalStorageData(url, setMainData, urlRoute);
  }
}

export function addEditConditionsAssets(inputObject, setAddDisabled, urlRoute) {
  const specificationsNested =
    inputObject && inputObject.specifications
      ? inputObject.specifications.maxTemp
      : null;
  if (urlRoute === "assets") {
    if (inputObject.healthscore && specificationsNested) {
      setAddDisabled(false);
    } else {
      setAddDisabled(true);
    }
  } else {
    setAddDisabled(false);
  }
}
