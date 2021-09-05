import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getStudentBoard = () => {
  return axios.get(API_URL + "student", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getTeacherBoard = () => {
  return axios.get(API_URL + "teacher", { headers: authHeader() });
};

const getManagerBoard = () => {
  return axios.get(API_URL + "manager", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getStudentBoard,
  getAdminBoard,
  getTeacherBoard,
  getManagerBoard
};
