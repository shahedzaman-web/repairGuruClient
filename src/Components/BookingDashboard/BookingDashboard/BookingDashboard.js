import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "../Book/Book";
import Review from "../Review/Review";


import BookingList from "../BookingList/BookingList";

const BookingDashboard = () => {
  return (
    <Router>
      <div className="row">
        <Sidebar></Sidebar>

        <Switch>
          <Route exact path="/bookingDashboard">
            <Book></Book>
          </Route>

          <Route exact path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          
         
        </Switch>
      </div>
    </Router>
  );
};

export default BookingDashboard;
