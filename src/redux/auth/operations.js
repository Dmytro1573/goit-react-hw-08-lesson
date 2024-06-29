import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunApi) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo);
      setAuthHeader(response.data.token);
      response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunAPI) => {
  try {
    const response = await axios.post("/contacts/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunAPI) => {
    try {
      const res = axios.get("/contacts/me");
    } catch (error) {}
  }
);
