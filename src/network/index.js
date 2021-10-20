import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://iiitv-classroom.herokuapp.com",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("classroomToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const api = {
  getAllCourses: () => axiosInstance.get("/course/all"),
  getApprovedCourses: () => axiosInstance.get("/course/approved"),
  getEnrolledCourses: () => axiosInstance.get("/student/enrolled_courses"),
  register: (data) => axiosInstance.post("/register", data),
  login: (data) => axiosInstance.post("/login", data),
  approveCourse: (data) => axiosInstance.post("/course/approve", data),
  rejectCourse: (data) => axiosInstance.post("/course/delete", data),
  getCourseDetails: (courseCode) => axiosInstance.get(`/course/${courseCode}`),
};

export default api;
