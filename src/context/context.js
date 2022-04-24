import React, { createContext, useState } from "react";
import GeneralEditInputs from "../components/DynamicComponents/generalEditInputs";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [assets, setAssets] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);
  const [units, setUnits] = useState([]);

  const companiesObject = {
    id: "",
    name: "",
  };

  const unitsObject = {
    id: "",
    name: "",
    companyId: "",
  };

  const assetsObject = {
    companyId: "",
    healthscore: "",
    status: "",
    id: "",
    image: "",
    metrics: {
      totalCollectsUptime: "",
      lastUptimeAt: "",
      totalUptime: "",
    },
    model: "",
    name: "",
    sensors: [],
    specifications: {
      maxTemp: "",
      power: "",
      rpm: "",
    },
  };

  const usersObject = {
    id: "",
    email: "",
    name: "",
    unitId: "",
    companyId: "",
  };
  const [assetsObj, setAssetsObj] = useState(assetsObject);
  const [usersObj, setUsersObj] = useState(usersObject);
  const [unitsObj, setUnitsObj] = useState(unitsObject);
  const [companiesObj, setCompaniesObj] = useState(companiesObject);

  const assetsObjectProp = {
    url: `https://my-json-server.typicode.com/tractian/fake-api/assets/`,
    inputObject: assetsObj,
    setInputObject: setAssetsObj,
    mainData: assets,
    setMainData: setAssets,
    urlRoute: "assets",
    editRender: (
      <GeneralEditInputs
        inputObject={assetsObj}
        setInputObject={setAssetsObj}
        urlRoute="assets"
      />
    ),
  };

  const userObjectProp = {
    url: `https://my-json-server.typicode.com/tractian/fake-api/users/`,
    inputObject: usersObj,
    setInputObject: setUsersObj,
    mainData: users,
    setMainData: setUsers,
    urlRoute: "users",
    editRender: (
      <GeneralEditInputs
        inputObject={usersObj}
        setInputObject={setUsersObj}
        urlRoute="users"
      />
    ),
  };

  const unitsObjectProp = {
    url: `https://my-json-server.typicode.com/tractian/fake-api/units/`,
    mainData: units,
    setMainData: setUnits,
    inputObject: unitsObj,
    setInputObject: setUnitsObj,
    urlRoute: "units",
    editRender: (
      <GeneralEditInputs
        inputObject={unitsObj}
        setInputObject={setUnitsObj}
        urlRoute="units"
      />
    ),
  };

  const companiesObjectProp = {
    url: `https://my-json-server.typicode.com/tractian/fake-api/companies/`,
    mainData: companies,
    setMainData: setCompanies,
    inputObject: companiesObj,
    setInputObject: setCompaniesObj,
    urlRoute: "companies",
    editRender: (
      <GeneralEditInputs
        inputObject={companiesObj}
        setInputObject={setCompaniesObj}
        urlRoute="companies"
      />
    ),
  };

  return (
    <MyContext.Provider
      value={{
        assetsObj,
        setAssetsObj,
        assets,
        setAssets,
        unitsObj,
        setUnitsObj,
        usersObj,
        setUsersObj,
        assetsObjectProp,
        userObjectProp,
        unitsObjectProp,
        companiesObjectProp,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
