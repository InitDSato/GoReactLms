import React from 'react';
import CourseList from '../components/CourseList';
import CourseForm from '../components/CourseForm';

const CoursePage = () => {
  return (
    <div>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default CoursePage;
