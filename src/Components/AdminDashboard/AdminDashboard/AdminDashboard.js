import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

import ManageServices from "../ManageServices/ManageServices";
import RepairList from "./../RepairList/RepairList"
const AdminDashboard = () => {
  return (
    <Router>
      <div className="row">
        <Sidebar></Sidebar>

        <Switch>
          <Route exact path="/adminDashboard">
          <AddService></AddService>
          </Route>

          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/repairList">
            <RepairList></RepairList>
          </Route>
          <Route path="/manageService">
            <ManageServices></ManageServices>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AdminDashboard;
