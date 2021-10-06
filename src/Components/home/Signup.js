import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Axios } from "axios";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const Signup = () => {




  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleSubmit=async()=>{

 const res=await fetch("http://iiitv-classroom.herokuapp.com/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      role:"student",
      name,
      email,
      password,
    })
  })

  const data=await res.json();

  console.log(data);

  }

   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                value={name} onChange={({target: {value}}) =>setName(value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                 value={email} onChange={({target: {value}}) =>setEmail(value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 value={password} onChange={({target: {value}}) =>setPassword(value)}
                variant="outlined"
                required
                fullWidth
                name="password"
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
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
        
              <NavLink to = "/Login">
                Already have an account? Sign in

                </NavLink>
              
            </Grid>
          </Grid>
      </div>
    </Container>
  );

}


export default Signup;

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

 
// login-->token back
// token authorization headers and send it backend to verify
// backend verify token and send user data