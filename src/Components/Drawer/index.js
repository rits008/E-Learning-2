import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BookIcon from "@mui/icons-material/Book";
import HomeIcon from "@mui/icons-material/Home";

export default function TemporaryDrawer(props) {
  const { handleOpenDrawer, open } = props;

  const toggleDrawer = () => {
    handleOpenDrawer();
  };

  const sx = {
    color: "#007FFF",
  };

  const drawerOptions = [
    {
      text: "Courses",
      icon: <BookIcon sx={sx} />,
      link: "/courses",
    },
    {
      text: "Home",
      icon: <HomeIcon sx={sx} />,
      link: "/",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {drawerOptions.map(({ text, icon }) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
      </List>
      <List></List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
