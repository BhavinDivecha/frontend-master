// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axiosInstance from "../services";
import axiosInstanceMedia from "../services/axiosMedia";


export const login = (data) => {
  return axiosInstance.post(`login`,data);
};

export const register = (data) => {
  return axiosInstance.post(`/register`,data);
};

export const GetDepartmentsPublic = () => {
  return axiosInstance.get(`/public-departments`);
};


export const GetDepartmentById = (id) => {
  return axiosInstance.get(`/public-department/${id}`);
};
export const GetCoursesPublic = (dept,catg) => {
  return axiosInstance.post(`/public-courses/${dept}`,catg);
};

export const GetCourseById = (id) => {
  return axiosInstance.get(`/public-course/${id}`);
};

