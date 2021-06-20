import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";



const PrivateRouteAdmin = ({ children, ...rest }) => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const email = 

 
  
 console.log(sessionStorage.email);
 
   


  return (
    <Route
      {...rest}
      render={({ location }) =>
      sessionStorage.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loginAdmin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouteAdmin;
