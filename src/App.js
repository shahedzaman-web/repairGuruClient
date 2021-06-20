import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import LoginUser from "./Components/Login/LoginUser/LoginUser";
import { createContext, useState } from "react";
import BookingDashboard from "./Components/BookingDashboard/BookingDashboard/BookingDashboard";
import PrivateRouteAdmin from "./Components/Login/PrivateRouteAdmin/PrivateRouteAdmin"
import PrivateRouteUser from "./Components/Login/PrivateRouteUser/PrivateRouteUser";
import LoginAdmin from "./Components/Login/LoginAdmin/LoginAdmin";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard/AdminDashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({"email": ""});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
         <Route path="/loginUser">
            <LoginUser></LoginUser>
          </Route>
        <Route path="/loginAdmin">
                <LoginAdmin/>
                  </Route>
          <PrivateRouteUser path="/bookingDashboard">
            <BookingDashboard></BookingDashboard>
          </PrivateRouteUser>

          <PrivateRouteAdmin path="/adminDashboard">
        <AdminDashboard/>
          </PrivateRouteAdmin>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
