import { apiClient } from '../api';

export const getCourses = async () => {
  const response = await apiClient.get('/courses');
  return response.data;
};

export const createCourse = async (course) => {
  const response = await apiClient.post('/courses', course);
  return response.data;
};

export const deleteCourse = async (id) => {
  await apiClient.delete(`/courses/${id}`);
};
