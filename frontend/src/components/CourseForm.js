import React, { useState } from 'react';
import { createCourse } from '../services/courseService';
import { Container, TextField, Button, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CourseForm = ({ onCourseCreated }) => {
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  const handleCreateCourse = async () => {
    const course = await createCourse(newCourse);
    onCourseCreated(course);
    setNewCourse({ title: '', description: '' });
  };

  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <TextField
          label="コースタイトル"
          fullWidth
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <TextField
          label="コース説明"
          fullWidth
          multiline
          rows={4}
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          style={{ marginTop: 16 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateCourse}
          style={{ marginTop: 16 }}
        >
          <FontAwesomeIcon icon={faPlus} /> コース作成
        </Button>
      </Paper>
    </Container>
  );
};

export default CourseForm;
