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
import HomePage from "./views/homePage";
import ScienceMoment from "./views/scienceMoment";
import TopNavbar from "./components/Navbars/Navbar";

import wow from "wowjs";
import AboutUs from "./views/aboutUs";
import TeamWork from "./views/teamWork";
import ScienceResult from "./views/scienceResult";
import LoginPage from "./views/login";
import RegisterPage from "./views/register";
import ArticleManage from "./views/articleManage";
import Storage from "./views/storage";
// import "animate.css";

new wow.WOW().init();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <TopNavbar />
    <Switch>
      {/* <Route path="/components" render={(props) => <Index {...props} />} /> */}
      <Route path="/home" render={(props) => <HomePage {...props} />} />
      <Route path="/dynamic" render={(props) => <ScienceMoment {...props} />} />
      <Route path="/aboutUs" render={(props) => <AboutUs {...props} />} />
      <Route path="/teamWork" render={(props) => <TeamWork {...props} />} />
      <Route path="/login" render={(props) => <LoginPage {...props} />} />
      <Route path="/register" render={(props) => <RegisterPage {...props} />} />
      <Route path="/articleManage" render={(props) => <ArticleManage {...props} />} />
      <Route
        path="/scienceResult"
        render={(props) => <ScienceResult {...props} />}
      />
      <Route path="/storage" render={(props) => <Storage {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);
