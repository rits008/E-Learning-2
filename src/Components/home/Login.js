import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import { Redirect } from "react-router";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));







export default function Login() {
  const classes = useStyles();





  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit=async()=>{

 const res=await fetch("http://iiitv-classroom.herokuapp.com/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email,
      password,
    })
  })

  const data=await res.json();

   if(data.status!=="error"){
      localStorage.setItem("token",data.token);
    
      
      // set up react router to redirect to home page
   }
   else
   {
     console.log("you dont have any account")
   }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to = "/register">
                Create an account? Sign Up

                </NavLink>
            </Grid>
          </Grid>
      </div>
      {/*  <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
