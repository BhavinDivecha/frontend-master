// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axiosInstance from "../services";
import axiosInstanceMedia from "../services/axiosMedia";


export const login = (data) => {
  return axiosInstance.post(`login`,data);
};

export const register = (data) => {
  return axiosInstance.post(`/register`,data);
};

export const recoverPassword = (data) => {
  return axiosInstance.post(`/recover-password`,data);
};

export const updatePassword = (data) => {
  return axiosInstance.post(`/update-password`,data);
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

export const GetLanguagesPublic = () => {
  return axiosInstance.get(`/public-languages`);
};

export const GetSetting = () => {
  return axiosInstance.get(`setting`);
};



export const updateProfile = (data) => {
  return axiosInstance.post(`/profile`,data);
};

export const getProfile = () => {
  return axiosInstance.get(`/profile`);
};

export const GetPagesPublic = () => {
  return axiosInstance.get(`/public-pages`);
};

export const GetPageById = (id) => {
  return axiosInstance.get(`/public-page/${id}`);
};
