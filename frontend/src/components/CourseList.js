import React, { useEffect, useState } from 'react';
import { getCourses, deleteCourse } from '../services/courseService';
import { Container, Grid, Typography, Button, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const data = await getCourses();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  const handleDeleteCourse = async (id) => {
    await deleteCourse(id);
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        コース一覧
      </Typography>
      <Grid container spacing={2}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h6">{course.title}</Typography>
              <Typography>{course.description}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteCourse(course.id)}
                style={{ marginTop: 16 }}
              >
                <FontAwesomeIcon icon={faTrash} /> 削除
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseList;
