import React, { useState } from "react";
import Authentication from "./components/Authentication";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  // const [role, setRole] = useState("");
  let authenticated = useSelector((state) => state.authenticated);


  // let display;

  // if (authenticated && role === "journalist") {
  //   display = <Redirect to="/journalist" />;
  // }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          {authenticated ? <Redirect to="/MyPage" /> : <Authentication />}
        </Route>
        <Route exact path="/MyPage">
          {authenticated ? <MyPage /> : <Redirect to="/" /> }
        </Route>
      </Switch>
      {/* {display}
      {authenticated ? (
        <Route exact path="/:role" component={MyPage} />
      ) : (
        <Authentication
          authenticate={(success) => setAuthenticated(success)}
          setRole={(role) => setRole(role)}
        />
      )} */}
    </>
  );
};

export default App;
