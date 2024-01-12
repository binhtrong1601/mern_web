import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(`/api/user/login`, data);
  return res.data;
};

export const signupUser = async (data) => {
  const res = await axios.post(`/api/user/signup`, data);
  return res.data;
};

export const getDetailUser = async (id, access_token) => {
  const res = await axiosJWT.get(`/api/user/get-details/${id}`, {
    headers: {
      token: `Beare ${access_token}`,
    },
  });
  return res.data;
};

export const refreshToken = async (id, access_token) => {
  const res = await axios.post(`/api/user/refresh-token`, {
    withCredentials: true,
  });
  return res.data;
};
export const logoutUser = async () => {
  const res = await axios.post(`/api/user/logout`);
  return res.data;
};
export const updateUser = async (id,data,access_token) => {
  const res = await axiosJWT.put(`/api/user/update-user/${id}`,data,{
    headers: {
      token: `Beare ${access_token}`,
    },
  });
  return res.data;
};
