import React from "react";
import Signup from "./Components/home/Signup";
import Login from "./Components/home/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/home/Home";
import { useAppState } from "./state";
function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Signup} />
    </Switch>
  );
}

function PrivateRoute(props) {
  let { state } = useAppState();

  console.log(state);

  return state.name ? <Route {...props} /> : <Redirect to="/login" />;
}

export default App;
