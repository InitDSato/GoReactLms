import React from 'react';
import { Container, Typography } from '@mui/material';

const DashboardPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Typography variant="h6">
        ようこそ、{user.name}さん！
      </Typography>
      <Typography variant="body1">
        あなたの現在の学習状況は以下の通りです。
      </Typography>
      {/* ここに学習状況を表示するためのコンポーネントを追加 */}
    </Container>
  );
};

export default DashboardPage;
