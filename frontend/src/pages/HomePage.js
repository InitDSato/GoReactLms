import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        ようこそLMSへ！
      </Typography>
      <Button variant="contained" color="primary" href="/signup" style={{ marginRight: 16 }}>
        サインアップ
      </Button>
      <Button variant="contained" color="secondary" href="/signin">
        サインイン
      </Button>
    </Container>
  );
};

export default HomePage;
