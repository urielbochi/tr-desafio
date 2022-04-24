import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import AssetsList from "../components/Actives/assetsList";
import CompaniesList from "../components/Companies/companiesList";
import Main from "../components/main/main";
import UnitsList from "../components/Units/unitsList";
import UsersList from "../components/User/usersList";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/units" element={<UnitsList />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/home" element={<Main />} />
        <Route exact path="/" element={<Navigate to="/home" />} />
      </Switch>
    </Router>
  );
}

export default MainRoutes;
