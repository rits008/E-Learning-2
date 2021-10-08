import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";

function ClassroomCard({ course, color }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.upper} style={{ backgroundColor: color }}>
        <div className={classes.titleDiv}>
          <Typography variant="h6" className={classes.title} noWrap>
            {course.courseCode}-{course.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {course.instructor[0].name}
          </Typography>
        </div>
      </div>
      <div className={classes.middle}></div>
      <div className={classes.lower}>
        <Button size="small" onClick={() => {}} className={classes.button}>
          Enroll
        </Button>
      </div>
    </div>
  );
}

export default ClassroomCard;

const useStyles = makeStyles((theme) => ({
  container: {
    height: 300,
    cursor: "pointer",
    width: 300,
    overflow: "hidden",
    margin: "0 auto",
    border: " 1px solid #dadce0",
    borderRadius: "8px",
    border: "1px solid #dcdcdc",
    position: "relative",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
  },

  upper: {
    display: "flex",
    height: "90px",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    color: "#fff",
    textTransform: "capitalize",
  },

  titleDiv: {
    width: "90%",
    margin: "0 auto",
  },

  title: {
    fontSize: 22,
  },

  subtitle: {
    fontSize: 16,
  },

  middle: {
    height: 165,
  },
  lower: {
    borderTop: "1px solid #dcdcdc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    padding: 10,
    position: "relative",
  },

  button: {
    position: "relative",
    transform: "translateY(-40%)",
  },
}));
