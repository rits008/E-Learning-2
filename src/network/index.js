import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://iiitv-classroom.herokuapp.com",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const api = {
  getAllCourses: () => axiosInstance.get("/course/all"),
  register: (data) => axiosInstance.post("/register", data),
  login: (data) => axiosInstance.post("/login", data),
  approveCourse: (data) => axiosInstance.post("/course/approve", data),
  rejectCourse: (data) => axiosInstance.post("/course/reject", data),
  getCourseDetails: (courseCode) => axiosInstance.get(`/course/${courseCode}`),
};

export default api;
