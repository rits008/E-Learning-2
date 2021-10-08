import React from "react";
import Signup from "./Components/home/Signup";
import Login from "./Components/home/Login";
import Dashboard from "./Components/Dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAppState } from "./state";
import Navbar from "./Components/navbar/Navbar";
import { Container, makeStyles } from "@material-ui/core";
function App() {
  let { state } = useAppState();

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {state.user && <Navbar />}
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
      </Switch>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    [theme.breakpoints.up(780)]: {
      width: "100%",
    },
  },
}));

function PrivateRoute(props) {
  let { state } = useAppState();
  return state.user ? <Route {...props} /> : <Redirect to="/login" />;
}

export default App;
