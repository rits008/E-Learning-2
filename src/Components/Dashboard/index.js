import React from "react";
import api from "../../network";

import { makeStyles, Typography } from "@material-ui/core";
import { useAppState } from "../../state";
import { Grid, CircularProgress, Container } from "@mui/material";
import { setCourses } from "../../state/reducer";
import ClassroomCard from "../coursecard";

function Dashboard() {
  const { dispatch, state } = useAppState();

  const [loading, setLoading] = React.useState(false);

  const classes = useStyles();

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const { data } = await api.getAllCourses();
    console.log(data);
    dispatch(setCourses(data));
    setLoading(false);
  }

  const colors = ["#36474F", "#566E7A", "#566E7A", "#32AC71", "#863A95"];

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.cardContainer}>
          {state.courses.map((course, index) => (
            <ClassroomCard
              key={course._id}
              course={course}
              color={colors[index % (colors.length - 1)]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
  },

  cardContainer: {
    display: "flex",
    "& > div": {
      margin: "10px",
    },
  },
}));
