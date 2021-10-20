import React from "react";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import api from "../../network";
import { useAppState } from "../../state";
import ClassroomCard from "../coursecard";

function ApprovedCourses() {
  const [loading, setLoading] = React.useState(false);

  const { state } = useAppState();

  const [approvedCourses, setApprovedCourses] = React.useState([]);

  const classes = useStyles();

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const { data } = await api.getApprovedCourses();
    setApprovedCourses(data);

    console.log(data);

    setLoading(false);
  }

  const colors = ["#36474F", "#566E7A", "#566E7A", "#32AC71", "#863A95"];

  return (
    <div className={classes.container}>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.cardContainer}>
          {approvedCourses.map((course, index) => (
            <ClassroomCard
              key={course._id}
              course={course}
              admin={state.role === "admin"}
              showButton={state.role === "student"}
              color={colors[index % (colors.length - 1)]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ApprovedCourses;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    "& > div": {
      margin: "10px",
    },
  },
}));
