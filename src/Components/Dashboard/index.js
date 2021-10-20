import React from "react";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import ClassroomCard from "../coursecard";
import api from "../../network";
import { useAppState } from "../../state";
import { removeCourse, setCourses } from "../../state/reducer";
import AdminOptions from "../admin/AdminOptions";
import MyAlert from "../../base/MyAlert";
import CreateInstructor from "../modals/CreateInstructor";

function Dashboard() {
  const { dispatch, state } = useAppState();

  const [loading, setLoading] = React.useState(false);

  const [showAlert, setShowAlert] = React.useState(false);

  const [error, setError] = React.useState({});

  const [isOpen, setIsOpen] = React.useState(false);

  const classes = useStyles();

  React.useEffect(() => {
    fetchData();
  }, []);

  function makeReqBasedOnRole() {
    if (state.role === "admin") {
      return api.getAllCourses();
    } else if (state.role === "student") {
      return api.getCoursesByStudent(state.user._id);
    }
    return api.getEnrolledCourses();
  }

  const handleCreateInstructor = async (val) => {
    try {
      const { data } = await api.register(val);
      setError(data);
    } catch (error) {
      const { response } = error;
      const { data } = response;
      setError(data);
    } finally {
      setShowAlert(true);
    }
  };

  async function fetchData() {
    setLoading(true);
    const { data } = await makeReqBasedOnRole();
    dispatch(setCourses(data));
    setLoading(false);
  }

  const approveCourse = async ({ courseCode }) => {
    const { data } = await api.approveCourse({ courseCode });
    console.log(data);
    dispatch(removeCourse({ courseCode }));
  };

  const rejectCourse = async ({ courseCode }) => {
    console.log(courseCode);
  };

  const colors = ["#36474F", "#566E7A", "#566E7A", "#32AC71", "#863A95"];

  return (
    <div className={classes.container}>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <React.Fragment>
          {showAlert && (
            <MyAlert
              message={error.message}
              severity={error.status}
              onClose={() => setShowAlert(false)}
            />
          )}

          <CreateInstructor
            handleClose={() => setIsOpen(false)}
            open={isOpen}
            handleCreateInstructor={handleCreateInstructor}
          />

          {state.role === "admin" && (
            <AdminOptions onClick={() => setIsOpen(true)} />
          )}
          <div className={classes.cardContainer}>
            {state.courses.map((course, index) => (
              <ClassroomCard
                key={course._id}
                approveCourse={() => approveCourse(course)}
                rejectCourse={() => rejectCourse(course)}
                course={course}
                admin={state.role === "admin"}
                color={colors[index % (colors.length - 1)]}
              />
            ))}
          </div>
        </React.Fragment>
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
    flexWrap: "wrap",
    "& > div": {
      margin: "10px",
    },
  },
}));
