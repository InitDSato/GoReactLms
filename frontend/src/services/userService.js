import { apiClient } from '../api';

export const registerUser = async (user) => {
  const response = await apiClient.post('/register', user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await apiClient.post('/login', user);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const logoutUser = () => {
  localStorage.removeItem('user');
};
