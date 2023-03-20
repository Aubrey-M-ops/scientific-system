import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

// import Index from "@/views/Index";
// import LandingPage from "views/examples/LandingPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
import HomePage from "@/views/homePage";
import TopNavbar from "@/components/Navbars/Navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <TopNavbar />
    <Switch>
      {/* <Route path="/components" render={(props) => <Index {...props} />} /> */}
      <Route path="/" render={(props) => <HomePage {...props} />} />
       {/* <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
