import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  MenuItem,
  Menu,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@mui/icons-material";
import { useAppState } from "../../state";
import Drawer from "../Drawer";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { state } = useAppState();

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const classes = useStyles(scrolled);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleOpenDrawer() {
    setDrawerOpen((prev) => !prev);
  }

  return (
    <nav className={classes.nav}>
      <Drawer handleOpenDrawer={handleOpenDrawer} open={isDrawerOpen} />
      <div className={classes.navLeft}>
        <IconButton onClick={handleOpenDrawer}>
          <MenuIcon />
        </IconButton>
        <img
          src="http://iiitvadodara.ac.in/img/Logo.jpg"
          alt="iiitv logo"
          className={classes.logo}
        />
        <Typography
          variant="h6"
          style={{
            color: "#5f6368",
            fontSize: "22px",
            marginLeft: "3px",
            fontFamily: "Open Sans",
          }}
        >
          Classroom
        </Typography>
      </div>
      {/* <div className="">
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Add />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton> */
      /* <IconButton onClick={logout}>
            <Avatar src={user?.photoURL} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Create Class</MenuItem>
            <MenuItem>Join Class</MenuItem>
          </Menu> */}
      {/* </div> */}
    </nav>
  );
}

const useStyles = makeStyles((theme) => ({
  nav: (props) => ({
    height: "65px",
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",

    justifyContent: "space-between",
    position: `${props ? "fixed" : ""}`,
    top: 0,
    alignItems: "center",
    marginBottom: `${!props ? " 20px" : "0px"}`,
    padding: "0px 20px",
    borderBottom: `${!props ? "1px solid #e6e6e6" : ""}`,
    boxShadow: `${props ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : ""}`,
  }),
  logo: {
    width: "30px",
    height: "30px",
    margin: "0px 0px 0px 10px",
  },

  navLeft: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
}));

export default Navbar;
