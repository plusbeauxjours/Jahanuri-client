import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import HomeHome from "../Routes/Login/HomeHome";
import Home from "../Routes/Home";
import Main from "../Routes/Main";

interface IProps {
  isLoggedIn: boolean;
}

const LoggedInPages = () => (
  <Switch>
    <Route path="/" exact={true} component={Main} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutPages = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter: React.FunctionComponent<IProps> = ({ isLoggedIn }) => {
  return <Router>{isLoggedIn ? <LoggedInPages /> : <LoggedOutPages />}</Router>;
};

export default AppRouter;
